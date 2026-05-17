const express = require("express");

const router = express.Router();

const Project = require("../models/Project");

router.post("/", async (req, res) => {

  try {

    const project = await Project.create(
      req.body
    );

    res.json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

module.exports = router;