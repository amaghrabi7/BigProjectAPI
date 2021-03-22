const express = require("express");
const router = express.Router();

const {
  universityCreate,
  universityList,
} = require("../controllers/universityController");

// University List
router.get("/", universityList);

// University Create
router.post("/", universityCreate);

module.exports = router;
