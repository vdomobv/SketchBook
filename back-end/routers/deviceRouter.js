const Router = require("express");

const deviceRouter = Router();

const DeviceDB = require("../controllers/deviceDB.js");

deviceRouter.route('/issue').post(DeviceDB.issue);

module.exports = deviceRouter;