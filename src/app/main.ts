import * as path from 'path';
import { ElectronMain } from './electron/electron.main';

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

const browserOptions = {
  title: 'Cryptan',
  icon: path.resolve(__dirname, '..', 'dist', 'logo.png'),
  width: 1280,
  height: 720,
  minWidth: 1280,
  minHeight: 720,
  frame: true,
  show: true,
  webPreferences: {
    webgl: true,
    defaultEncoding: 'utf8',
    zoomFactor: 1.0
  }
};

require('electron-reload')(path.join(__dirname, '..', '..'), {
  electron: path.resolve(__dirname, '..', '..', 'node_modules', '.bin', 'electron.cmd')
});

export default new ElectronMain({
  develop: process.argv.indexOf('--develop') !== -1,
  theme: (
    process.argv.indexOf('--theme') && process.argv[process.argv.indexOf('--theme') + 1]
      ? process.argv[process.argv.indexOf('--theme') + 1] as 'light' | 'dark'
      : 'system'
  ),
  index: path.resolve(__dirname, '..', 'dist', 'index.html'),
  browserOptions
}).runningApplication();
