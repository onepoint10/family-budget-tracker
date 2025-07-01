import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

interface ChartData {
  name: string;
  amount: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
}

const screenWidth = Dimensions.get('window').width;

const ExpensePieChart: React.FC<{ data: ChartData[] }> = ({ data }) => (
  <PieChart
    data={data}
    width={screenWidth - 32}
    height={220}
    chartConfig={{
      backgroundColor: '#fff',
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      color: (opacity = 1) => `rgba(25, 118, 210, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    }}
    accessor="amount"
    backgroundColor="transparent"
    paddingLeft="16"
    absolute
  />
);

export default ExpensePieChart;
