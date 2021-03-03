import {BrowserWindow, nativeTheme} from 'electron';
import {IConfig} from '../../interfaces/config';

export class ElectronWindow {

  public window: BrowserWindow;

  constructor(private model: IConfig) {
    this.window = new BrowserWindow(model.options);
    this.window.removeMenu();
    this.openDevTools(model.develop);
    this.window.loadURL(model.loadIndexFile).then();
    this.window.on('closed', model.onClose);
    this.useTheme();
  }

  private openDevTools(develop: boolean): void {
    if (develop) {
      this.window.webContents.openDevTools();
    }
  }

  private useTheme(): void {
    nativeTheme.themeSource = this.model.theme;
  }

}
