const SQLite = require('expo-sqlite');
const db = SQLite.openDatabase('family_budget.db');
export default db;