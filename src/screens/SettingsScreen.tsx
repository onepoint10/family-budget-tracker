import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Settings</Text>
      <Button mode="outlined" style={styles.button}>Export Data</Button>
      <Button mode="outlined" style={styles.button}>Import Data</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { marginBottom: 16 },
  button: { marginTop: 12 },
});

export default SettingsScreen;
