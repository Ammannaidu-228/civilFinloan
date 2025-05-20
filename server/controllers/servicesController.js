const Service = require('../models/Service');

async function getServices(req, res) {
    try {
        const services = await Service.find();
        return res.status(201).json({status: "success", data: services});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function getServiceByType(req, res) {
    try {
        const { type } = req.params;
        const service = await Service.findOne({ type });
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        return res.status(200).json({ status: "success", data: service });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



