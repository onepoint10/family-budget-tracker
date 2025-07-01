// src/utils/crossPlatformDb.web.ts
// In-memory stub for web (no-op)
const db = {
  transaction: (cb) => cb({
    executeSql: (sql, params, successCb, errorCb) => {
      if (successCb) successCb();
    }
  }),
};
export default db;