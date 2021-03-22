const { University } = require("../db/models");
const slugify = require("slugify");

exports.universityList = async (req, res) => {
  try {
    const universities = await University.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(universities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.universityCreate = async (req, res) => {
  try {
    const newUniversity = await University.create(req.body);
    res.status(201).json(newUniversity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
