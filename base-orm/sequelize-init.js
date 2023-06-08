import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite:./.data/gym.db")

// users model defining
const users = sequelize.define(
  "users",
  {
    IdUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    User: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "User is required",
        },
        len: {
          args: [5, 30],
          msg: "Name must be between 5 and 30 length"
        },
        unique: {
          args: true,
          msg: "User already exists",
        }
      },
    },
    Password: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "User is required",
        },
        len: {
          args: [5, 30],
          msg: "Name must be between 5 and 30 length"
        },
      },
    },
  },
);

export {
  sequelize,
  users
};