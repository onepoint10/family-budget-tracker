import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const ReportsScreen = () => {
  // Placeholder for reports
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Reports</Text>
      <Text>Charts and analytics will be here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { marginBottom: 16 },
});

export default ReportsScreen;
