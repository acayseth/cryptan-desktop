import * as path from 'path';
import {ElectronMain} from './app/electron/ElectronMain';
import {getOsDevelopEnv, getOsThemeEnv} from './libs/os-env';

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

const electron = new ElectronMain({
  develop: getOsDevelopEnv(),
  theme: getOsThemeEnv(),
  onClose: () => {},
  loadIndexFile: path.resolve(__dirname, '..', 'dist', 'index.html'),
  options: {
    title: 'Cryptan',
    icon: path.resolve(__dirname, '..', 'dist', 'logo.png'),
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    frame: true,
    webPreferences: {
      webgl: true,
      defaultEncoding: 'utf8',
      zoomFactor: 1.0
    },
    darkTheme: false
  }
});
