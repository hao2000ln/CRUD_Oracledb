const db = require("../config/db");

const options = {
  autoCommit: true,
  batchErrors: true,
};

module.exports = {
  getAlldmWarehouse: async () => {
    try {
      const sql = "SELECT ID, NAME FROM ESDDMWAREHOUSETYPEM1";
      const result = await db.Open(sql, []);
      //   const processedData = result.map((row) => {
      //     return {
      //       ID: row.ID,
      //       NAME: row.NAME,
      //     };
      //   });
      return result;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  },
  //check id
  checkIdExists: async (id) => {
    try {
      const sql =
        "SELECT COUNT(*) AS count FROM ESDDMWAREHOUSETYPEM1 WHERE ID = :id";
      const binds = { id };
      const result = await db.Open(sql, binds);
      return result[0].count > 0;
    } catch (error) {
      console.error("Error checking ID existence:", error);
      throw error;
    }
  },
  //tạo mới
  postCreateWarehouse: async (id, name) => {
    try {
      const sql =
        "INSERT INTO ESDDMWAREHOUSETYPEM1 (ID, NAME) VALUES (:id, :name)";
      const binds = {
        id: id,
        name: name,
      };
      const result = await db.Open(sql, binds);
      return result;
    } catch (error) {
      console.error("Error inserting warehouse:", error);
      throw error;
    }
  },
  //sửa
  updateWarehouse: async (id, name) => {
    try {
      const sql = `UPDATE ESDDMWAREHOUSETYPEM1 SET NAME = :name WHERE ID = :id`;
      const binds = {
        id: id,
        name: name,
      };
      const result = await db.Open(sql, binds);
      return result;
    } catch (error) {
      console.error("Error inserting warehouse:", error);
      throw error;
    }
  },
  //xóa
  deleteWarehouse: async (id) => {
    try {
      const sql = "DELETE FROM ESDDMWAREHOUSETYPEM1 WHERE ID = :id";
      const binds = { id: id };
      const result = await db.Open(sql, binds);
      return result;
    } catch (error) {
      console.error("Error deleting warehouse:", error);
      throw error;
    }
  },
};
