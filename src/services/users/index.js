import express from "express";
import db from "../../db/models/Relationship.js";
import sequelize from "sequelize";

const { User } = db;
const router = express.Router();

// INSERT
router
.route("/")
.post(async (req, res, next) => {
  try {
    const data = await User.create(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// SELECT
router
.route("/")
.get(async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
});


export default router;