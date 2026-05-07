import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  isAutomaticTimeEnabled(): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'CheckAutomaticTimeSetting'
);
