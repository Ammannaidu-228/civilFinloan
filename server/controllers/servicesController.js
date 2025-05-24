const Service = require('../models/servicesModel');

async function getServices(req, res) {
    try {
        const services = await Service.find();
        if(services.length === 0) {
            return res.status(404).json({ message: "No services found" });
        }
        return res.status(200).json({ status: "success", data: services });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function addService(req, res) {
    try {
        const { type, code, description, loans } = req.body;
        const newService = new Service({ type, code, description, loans });
        await newService.save();
        return res.status(201).json({ status: "success", data: newService });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



async function getServiceByType(req, res) {
    try {
        const { code } = req.params;
        const service = await Service.findOne({ code });
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        return res.status(200).json({ status: "success", data: service });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



module.exports = {
    getServices,
    getServiceByType,
    addService
}