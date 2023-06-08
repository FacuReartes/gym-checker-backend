import express from "express";
const router = express.Router();

import * as db from "../base-orm/sequelize-init.js"

router.get("/api/users", async function (req, res, next) {
  let data = await db.users.findAll({
    attributes: ["IdUsuario", "User"],
  });
  res.json(data);
});

export default router;