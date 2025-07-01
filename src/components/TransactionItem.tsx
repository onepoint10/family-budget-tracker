import React from 'react';
import { List, Text } from 'react-native-paper';

interface TransactionItemProps {
  category: string;
  amount: number;
  note?: string;
  type: 'income' | 'expense';
  date: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ category, amount, note, type, date }) => (
  <List.Item
    title={category}
    description={note ? `${note} • ${date}` : date}
    left={props => <List.Icon {...props} icon={type === 'income' ? 'arrow-down-bold' : 'arrow-up-bold'} />}
    right={props => <Text style={{ color: type === 'income' ? 'green' : 'red', alignSelf: 'center' }}>${amount.toFixed(2)}</Text>}
  />
);

export default TransactionItem;
