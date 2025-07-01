import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const DashboardScreen = () => {
  // Placeholder for summary data
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Dashboard</Text>
      <Card style={styles.card}>
        <Card.Title title="Total Balance" />
        <Card.Content>
          <Text variant="headlineMedium">$0.00</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="This Month's Expenses" />
        <Card.Content>
          <Text variant="bodyLarge">$0.00</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="This Month's Income" />
        <Card.Content>
          <Text variant="bodyLarge">$0.00</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { marginBottom: 16 },
  card: { marginBottom: 16 },
});

export default DashboardScreen;
