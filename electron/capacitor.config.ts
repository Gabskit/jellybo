import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.polaris.bubblebox',
  appName: 'bubblebox',
  webDir: 'www',
  plugins: {
    Electron: {
      deepLinkingEnabled: false,
      splashScreenSpinnerStyle: 'large',
    }
  }
};

export default config;
