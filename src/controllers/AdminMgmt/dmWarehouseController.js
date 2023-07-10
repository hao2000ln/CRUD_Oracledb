const services = require("../../models/CRUDdmWarehouse");

module.exports = {
  getAPIdmWarehouse: async (req, res) => {
    try {
      let results = await services.getAlldmWarehouse();
      // console.log(results);
      return res.status(200).json({
        EC: 0,
        data: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving users");
    }
  },
  //tạo mới
  postCreateAPI: async (req, res) => {
    try {
      const { id, name } = req.body;
      let results = await services.postCreateWarehouse(id, name);
      // Clear input fields
      req.body.id = "";
      req.body.name = "";

      return res.status(200).json({
        EC: 0,
        success: true,
        message: "Tạo mới thành công!",
        data: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving users");
    }
  },
  //sửa
  putUpdateAPI: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;
      console.log("upadte:", id, name);
      await services.updateWarehouse(id, name);

      res.status(200).json({
        success: true,
        message: "Bản ghi đã được cập nhật thành công.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating");
    }
  },
  //xóa
  deleteWarehouseAPI: async (req, res) => {
    try {
      const id = req.params.id;
      await services.deleteWarehouse(id);
      res.status(200).json({
        success: true,
        message: "Bản ghi đã được xóa thành công.",
      });
    } catch (error) {
      console.error("Error deleting warehouse:", error);
      res.status(500).json({
        success: false,
        message: "Có lỗi xảy ra trong quá trình xóa bản ghi.",
        error: error.message,
      });
    }
  },
};
