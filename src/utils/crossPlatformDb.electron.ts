const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, 'family_budget.db');
const db = new sqlite3.Database(dbPath);

export default {
  transaction(cb: any) {
    cb({
      executeSql: (sql: string, params: any[] = [], successCb?: any, errorCb?: any) => {
        db.run(sql, params, function (err: any) {
          if (err) {
            if (errorCb) errorCb(err);
          } else {
            if (successCb) successCb(this);
          }
        });
      }
    });
  }
};
