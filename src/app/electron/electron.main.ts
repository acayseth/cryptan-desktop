import * as path from 'path';
import { app, BrowserViewConstructorOptions, BrowserWindow } from 'electron';
import { ElectronWindow } from './electron.window';

import { synchronize, EntityModel, authenticate } from '../sqlite/index';

export interface IElectronMainConfig {
  develop: boolean;
  theme: ('system' | 'light' | 'dark');
  index: string;
  browserOptions: BrowserViewConstructorOptions;
}

export class ElectronMain {

  private window: BrowserWindow;

  constructor(private config: IElectronMainConfig) {
    
  }

  public runningApplication(): void {
    app.whenReady().then(() => this.whenReadyCreateWindow());
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
    app.on('activate', () => this.createDefaultWindows());
  }

  private whenReadyCreateWindow(): void {
    this.window = new ElectronWindow(this.config, this.onClose).window;

    // exists databases
    // authenticate().then(() => {
    //   console.log('auth');
    // });

    // not exists databases
    // synchronize({force: true}).then(() => {
    //   console.log('sync');
    // });

  }

  private createDefaultWindows(): void {
    if (BrowserWindow.getAllWindows().length === 0) {
      this.whenReadyCreateWindow();
    }
  }

  private onClose(): void {
    app.quit();
  }

}
