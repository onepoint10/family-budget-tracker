import { Platform } from 'react-native';

let db: any = null;

if (Platform.OS === 'web') {
  // Simple in-memory fallback for demo; replace with IndexedDB/localStorage for persistence
  db = {
    transaction: (cb: any) => cb({
      executeSql: (sql: string, params?: any, successCb?: any, errorCb?: any) => {
        // No-op or implement a web fallback
        if (successCb) successCb();
      }
    }),
  };
} else {
  // Use expo-sqlite for native
  const SQLite = require('expo-sqlite');
  db = SQLite.openDatabase('family_budget.db');
}

export default db;
