

async function addMember(req,res) {
    try {
        const { name, email, phone } = req.body;
        const newMember = new Member({ name, email, phone });
        await newMember.save();
        return res.status(201).json({ status: "success", data: newMember });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}