import express from "express";
const router = express.Router();

import * as db from "../base-orm/sequelize-init.js"

router.get("/api/categories", async function (req, res, next) {
  let data = await db.categories.findAll({
    attributes: ["IdCategory", "Name", "IdUser"],
  });
  res.json(data);
});

export default router;