const express = require("express");
const router = express.Router();
const { getAll, postCategory } = require("../controllers/category");



router.get("/get", getAll);
router.post("/post", postCategory);

module.exports = router;