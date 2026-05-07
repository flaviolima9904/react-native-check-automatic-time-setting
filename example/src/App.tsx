import { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, AppState } from 'react-native';
import CheckDeviceAutoTime from 'react-native-check-automatic-time-setting';

export default function App() {
  const [result, setResult] = useState<boolean | undefined>();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    CheckDeviceAutoTime.isAutomaticTimeEnabled().then(setResult);
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current?.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        CheckDeviceAutoTime.isAutomaticTimeEnabled().then(setResult);
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Automatic time is: {result ? 'Enable' : 'Disabled'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
