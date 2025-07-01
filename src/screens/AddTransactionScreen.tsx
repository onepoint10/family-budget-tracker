import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, SegmentedButtons } from 'react-native-paper';

const AddTransactionScreen = () => {
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleAdd = () => {
    // TODO: Add transaction to database
    setCategory('');
    setAmount('');
    setNote('');
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Add Transaction</Text>
      <SegmentedButtons
        value={type}
        onValueChange={setType}
        buttons={[
          { value: 'expense', label: 'Expense' },
          { value: 'income', label: 'Income' },
        ]}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <TextInput
        label="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Note"
        value={note}
        onChangeText={setNote}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAdd} style={styles.button}>
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { marginBottom: 16 },
  input: { marginBottom: 12 },
  button: { marginTop: 12 },
});

export default AddTransactionScreen;
