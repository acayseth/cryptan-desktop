export const getOsDevelopEnv = (): boolean => {
  return process.argv.indexOf('--develop') !== -1;
};

export const getOsThemeEnv = (): ('system' | 'light' | 'dark') => {
  if (process.argv.indexOf('--theme') && process.argv[process.argv.indexOf('--theme') + 1]) {
    return process.argv[process.argv.indexOf('--theme') + 1] as 'light' | 'dark';
  } else {
    return 'system';
  }
};

