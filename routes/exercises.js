import express from "express";
const router = express.Router();

import * as db from "../base-orm/sequelize-init.js"

router.get("/api/exercises", async function (req, res, next) {
  let data = await db.exercises.findAll({
    attributes: ["IdExercise", "Name", "Sets", "Repetitions", "Kg", "Description", "IdCategory", "IdUser"],
  });
  res.json(data);
});

export default router;