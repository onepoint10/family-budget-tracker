import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, List } from 'react-native-paper';

const TransactionsScreen = () => {
  // Placeholder for transactions list
  const transactions = [];
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.category}
            description={item.note}
            right={() => <Text>${item.amount}</Text>}
          />
        )}
        ListEmptyComponent={<Text>No transactions yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { marginBottom: 16 },
});

export default TransactionsScreen;
