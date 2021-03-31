import * as path from 'path';
import { ElectronMain } from './electron/electron.main';

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

if (process.argv.indexOf('--develop') !== -1) {
  require('electron-reload')(process.cwd(), {
    electron: path.resolve(process.cwd(), 'node_modules', '.bin', 'electron.cmd'),
    argv: process.argv.slice(2)
  });
}

const osEnvTheme = () => {
  if (process.argv.indexOf('--light')) {
    return 'light' as 'light';
  } else if (process.argv.indexOf('--dark')) {
    return 'dark' as 'dark';
  } else {
    return 'system' as 'system';
  }
};

export default new ElectronMain({
  develop: process.argv.indexOf('--develop') !== -1,
  theme: osEnvTheme(),
  index: path.resolve(__dirname, '..', 'dist', 'index.html'),
  browserOptions: {
    title: 'Cryptan',
    icon: path.resolve(__dirname, '..', 'dist', 'logo.png'),
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    frame: false,
    show: false,
    webPreferences: {
      webgl: true,
      defaultEncoding: 'utf8',
      zoomFactor: 1.0
    }
  }
});

