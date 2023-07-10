const oracledb = require("oracledb");
oracledb.autoCommit = true;

// Database connection settings
const dbConfig = {
  user: process.env.user,
  password: process.env.password,
  connectString: process.env.connectString,
  poolAlias: "default", // Add poolAlias to the configuration
  poolMin: 2,
  poolMax: 10,
  poolIncrement: 2,
  poolTimeout: 300,
};

// Create a connection pool
oracledb
  .createPool(dbConfig)
  .then(() => console.log("Oracle DB connection pool created"))
  .catch((err) => {
    console.error("Failed to create Oracle DB connection pool:", err);
    process.exit(1);
  });

// Function to execute a SQL query and return a promise
async function Open(sql, binds = []) {
  let connection;
  try {
    connection = await oracledb.getConnection("default"); // Use poolAlias "default" when getting a connection
    const result = await connection.execute(sql, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    return result.rows;
  } catch (err) {
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing Oracle DB connection:", err);
      }
    }
  }
}

module.exports = {
  Open,
};
