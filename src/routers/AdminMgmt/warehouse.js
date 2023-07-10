const express = require("express");
const router = express.Router();
const viewController = require("../../controllers/AdminMgmt/dmWarehouseController");

router.get("/api", viewController.getAPIdmWarehouse);
router.post("/create", viewController.postCreateAPI);
router.put("/update/:id", viewController.putUpdateAPI);
router.delete("/delete/:id", viewController.deleteWarehouseAPI);

router.get("/", (req, res) => {
  return res.render("./AdminMgmt/warehouse.ejs");
});

module.exports = router;
