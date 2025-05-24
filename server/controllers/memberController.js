const Member = require('../models/membersModel')

async function addMember(req,res) {
    try {
        const { fullName, email, mobile, password } = req.body;
        const newMember = new Member({ fullName, email, mobile, password });
        await newMember.save();
        return res.status(201).json({ status: "success", data: newMember });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

async function userLogin(req, res) {
    try {
        const { email, password } = req.body;
        const member = await Member.findOne({email});
        if (!member) {
            return res.status(404).json({ message: "User not found. Please Signup first." });
        }
        if (member.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        return res.status(200).json({ status: "Login successful!!! Please wait profile page loading...", data: member });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function updateProfile(req, res) {
    try {
        const { email, phone, password, fullName } = req.body;
        const member = await Member.findOne({email});
        if (!member) {
            return res.status(404).json({ message: "User not found. Please Signup first." });
        }
        const updatedMember = await Member.findByIdAndUpdate(member._id,  {email, phone, password, fullName }, {new: true});
        return res.status(200).json({ status: "Profile updated successfully", data: updatedMember });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function getAllMembers(req,res) {

    try {
        const members = await Member.find();
        if(members.length === 0) {
            return res.status(404).json({ message: "No members found" });
        }
        return res.status(200).json({ status: "success", data: members });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}




module.exports = {
    addMember,
    userLogin,
    updateProfile, 
    getAllMembers
}
