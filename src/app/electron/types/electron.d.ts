import { BrowserWindowConstructorOptions } from 'electron';

export interface IElectronMainConfig {
  develop: boolean;
  theme: ('system' | 'light' | 'dark');
  index: string;
  browserOptions: BrowserWindowConstructorOptions;
}
