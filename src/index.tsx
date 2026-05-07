// export { multiply } from './multiply';

import { NativeModules } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-check-automatic-time-setting' doesn't seem to be linked. Make sure: \n\n` +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

interface ICheckAutomaticTimeSetting {
  isAutomaticTimeEnabled(): Promise<boolean>;
}

const CheckAutomaticTimeSetting = NativeModules.CheckAutomaticTimeSetting
  ? NativeModules.CheckAutomaticTimeSetting
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export default CheckAutomaticTimeSetting as ICheckAutomaticTimeSetting;
