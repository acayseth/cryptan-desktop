import {BrowserWindowConstructorOptions} from 'electron';

export interface IConfig {
  develop: boolean;
  theme: ('system' | 'light' | 'dark');
  loadIndexFile: string;
  onClose: () => void;
  options: BrowserWindowConstructorOptions;
}
