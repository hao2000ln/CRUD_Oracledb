const DmWarehouse = require("./AdminMgmt/warehouse");

function route(app) {
  app.use("/adminMgmt/dmWarehouse", DmWarehouse);
}

module.exports = route;
