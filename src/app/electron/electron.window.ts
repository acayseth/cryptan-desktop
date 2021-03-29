import * as path from 'path';
import { BrowserViewConstructorOptions, BrowserWindow, nativeTheme } from 'electron';

import { IElectronMainConfig } from './electron.main';

export class ElectronWindow {

  public window: BrowserWindow;

  constructor(private config: IElectronMainConfig, onClose: () => void) {
    this.window = new BrowserWindow(this.config.browserOptions);
    this.window.on('closed', onClose);
    
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