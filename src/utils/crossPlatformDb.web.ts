import localforage from "localforage";

const db = {
  async transaction(cb: any) {
    await cb({
      executeSql: async (sql: string, params: any[] = [], successCb?: any, errorCb?: any) => {
        if (sql.startsWith("CREATE TABLE")) {
          if (successCb) successCb();
        } else if (sql.startsWith("INSERT INTO transactions")) {
          const tx = params[0];
          let transactions = (await localforage.getItem("transactions")) || [];
          transactions = Array.isArray(transactions) ? transactions : [];
          transactions.push(tx);
          await localforage.setItem("transactions", transactions);
          if (successCb) successCb();
        } else if (sql.startsWith("SELECT")) {
          const transactions = (await localforage.getItem("transactions")) || [];
          if (successCb) successCb({ rows: { _array: transactions } });
        } else {
          if (successCb) successCb();
        }
      }
    });
  }
};
export default db;
