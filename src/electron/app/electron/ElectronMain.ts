import {app, BrowserWindow} from 'electron';
import {ElectronWindow} from './ElectronWindow';
import {IConfig} from '../../interfaces/config';

export class ElectronMain {

  constructor(private config: IConfig) {
    this.config.onClose = ElectronMain.onWindowClosed;
    this.events();
  }

  private static onWindowClosed(): void {
    app.quit();
  }

  private events(): void {
    app.whenReady().then(() => this.createWindow());
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
    app.on('activate', () => this.createDefaultWindows());
  }

  private createWindow(): BrowserWindow {
    return new ElectronWindow(this.config).window;
  }

  public createDefaultWindows(): void {
    if (BrowserWindow.getAllWindows().length === 0) {
      this.createWindow();
    }
  }

}
