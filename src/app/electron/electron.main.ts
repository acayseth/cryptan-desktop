import { app, BrowserWindow, App } from 'electron';

import { IElectronMainConfig } from './types/electron';
import { ElectronWindow } from './electron.window';

export class ElectronMain {

  public app: App = app;
  private window: BrowserWindow;

  constructor(private config: IElectronMainConfig) {
    this.initApp();
    console.log('constructor');
  }

  private initApp(): void {
    app.whenReady().then(() => this.whenReadyCreateWindow());
    app.on('window-all-closed', () => this.onCloneNonDarwin());
    app.on('activate', () => this.createDefaultWindows());
  }

  private whenReadyCreateWindow(): void {
    this.window = new ElectronWindow(this.config, this.app).window;
  }

  private createDefaultWindows(): void {
    if (BrowserWindow.getAllWindows().length === 0) {
      this.whenReadyCreateWindow();
    }
  }

  private onCloneNonDarwin(): void {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  }

}
