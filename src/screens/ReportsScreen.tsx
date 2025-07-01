import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import ExpensePieChart from '../components/ExpensePieChart';

const sampleData = [
  { name: 'Food', amount: 450, color: '#1976d2', legendFontColor: '#222', legendFontSize: 14 },
  { name: 'Transport', amount: 120, color: '#ffb300', legendFontColor: '#222', legendFontSize: 14 },
  { name: 'Utilities', amount: 90, color: '#388e3c', legendFontColor: '#222', legendFontSize: 14 },
  { name: 'Entertainment', amount: 60, color: '#d32f2f', legendFontColor: '#222', legendFontSize: 14 },
];

const ReportsScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Reports</Text>
      <ExpensePieChart data={sampleData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { marginBottom: 16 },
});

export default ReportsScreen;
