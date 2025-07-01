import React, { createContext, useContext, useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('family_budget.db');

const DatabaseContext = createContext<any>(null);

export const DatabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS transactions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          type TEXT,
          category TEXT,
          amount REAL,
          date TEXT,
          note TEXT
        );`
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS categories (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          type TEXT
        );`
      );
    }, undefined, () => setReady(true));
  }, []);

  return (
    <DatabaseContext.Provider value={{ db, ready }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => useContext(DatabaseContext);
