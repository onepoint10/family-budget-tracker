import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Screens
import DashboardScreen from './src/screens/DashboardScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import AddTransactionScreen from './src/screens/AddTransactionScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ReportsScreen from './src/screens/ReportsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Theme
import { theme } from './src/theme/theme';

// Database
import { DatabaseProvider } from './src/context/DatabaseContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DatabaseProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: string;

                switch (route.name) {
                  case 'Dashboard':
                    iconName = 'dashboard';
                    break;
                  case 'Transactions':
                    iconName = 'list';
                    break;
                  case 'Add':
                    iconName = 'add-circle';
                    break;
                  case 'Categories':
                    iconName = 'category';
                    break;
                  case 'Reports':
                    iconName = 'bar-chart';
                    break;
                  case 'Settings':
                    iconName = 'settings';
                    break;
                  default:
                    iconName = 'help';
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: theme.colors.primary,
              tabBarInactiveTintColor: 'gray',
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          >
            <Tab.Screen 
              name="Dashboard" 
              component={DashboardScreen} 
              options={{ title: 'Dashboard' }}
            />
            <Tab.Screen 
              name="Transactions" 
              component={TransactionsScreen} 
              options={{ title: 'Transactions' }}
            />
            <Tab.Screen 
              name="Add" 
              component={AddTransactionScreen} 
              options={{ title: 'Add Transaction' }}
            />
            <Tab.Screen 
              name="Categories" 
              component={CategoriesScreen} 
              options={{ title: 'Categories' }}
            />
            <Tab.Screen 
              name="Reports" 
              component={ReportsScreen} 
              options={{ title: 'Reports' }}
            />
            <Tab.Screen 
              name="Settings" 
              component={SettingsScreen} 
              options={{ title: 'Settings' }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </DatabaseProvider>
  );
}