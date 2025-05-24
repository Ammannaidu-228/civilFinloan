const express = require('express');
const { addMember, userLogin, updateProfile, getAllMembers} = require('../controllers/memberController');
const router = express.Router();

router.post("/signup", addMember );
router.post("/login", userLogin);
router.post("/update", updateProfile)
router.get("/all", getAllMembers);

module.exports = router;