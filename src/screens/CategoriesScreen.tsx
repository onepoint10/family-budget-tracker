import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, List, Button } from 'react-native-paper';

const CategoriesScreen = () => {
  // Placeholder for categories list
  const categories = [];
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={item => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            description={item.type}
          />
        )}
        ListEmptyComponent={<Text>No categories yet.</Text>}
      />
      <Button mode="contained" style={styles.button}>Add Category</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { marginBottom: 16 },
  button: { marginTop: 16 },
});

export default CategoriesScreen;
