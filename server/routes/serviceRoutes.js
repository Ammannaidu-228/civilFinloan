const express = require('express');
const { getServices, getServiceByType, addService } = require('../controllers/servicesController');
const router = express.Router();

router.get("/all", getServices);
router.get("/type/:code", getServiceByType);
router.post("/add", addService);


module.exports = router;