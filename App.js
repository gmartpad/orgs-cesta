import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App react de teste!</Text>
      <Text style={styles.hotReloading}>Ao mudar o texto aqui, o app automaticamente atualiza no dispositivo através do hot reloading!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hotReloading: {
    padding: 20
  }
});
