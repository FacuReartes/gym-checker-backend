import express from "express";
const router = express.Router();

import * as db from "../base-orm/sequelize-init.js"
import { ValidationError } from "sequelize";

router.get("/api/users", async function (req, res, next) {
  let data = await db.users.findAll({
    attributes: ["IdUser", "User"],
  });
  res.json(data);
});

//POST user
router.post("/api/users/", async (req, res) => {
  try {
    let data = await db.users.create({
      IdUser: req.body.IdUser,
      User: req.body.User,
      Password: req.body.Password,

    });
    res.status(200).json(data.dataValues); // devolvemos el registro agregado!
  } catch (err) {
    if (err instanceof ValidationError) {
      // si son errores de validacion, los devolvemos
      let messages = '';
      err.errors.forEach((x) => messages += (x.path ?? 'campo') + ": " + x.message + '\n');
      res.status(400).json({message : messages});
    } else {
      // si son errores desconocidos, los dejamos que los controle el middleware de errores
      throw err;
    }
  }
});

export default router;