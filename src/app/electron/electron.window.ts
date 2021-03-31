import { BrowserWindow, nativeTheme, App } from 'electron';

import { IElectronMainConfig } from './types/electron';

export class ElectronWindow {

  public window: BrowserWindow;

  constructor(private config: IElectronMainConfig, app: App) {
    this.window = new BrowserWindow(this.config.browserOptions);
    this.window.on('closed', () => {
      app.quit();
    });
    
    nativeTheme.themeSource = this.config.theme;

    this.window.loadURL(this.config.index).then(() => {
      this.openDevTools();
      this.window.show();
    });
  }

  private openDevTools(): void {
    if (this.config.develop) {
      this.window.webContents.openDevTools();
    }
  }

}