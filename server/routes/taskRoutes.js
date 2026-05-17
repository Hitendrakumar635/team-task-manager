const express = require("express");

const router = express.Router();

const Task = require("../models/Task");

router.post("/", async (req, res) => {

  try {

    const task = await Task.create(
      req.body
    );

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

router.get("/", async (req, res) => {

  try {

    const tasks = await Task.findAll();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

router.put("/:id", async (req, res) => {

  try {

    await Task.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.json({
      message: "Task Updated",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

router.delete("/:id", async (req, res) => {

  try {

    await Task.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      message: "Task Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

module.exports = router;