import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite:./.data/gym.db")

// users model defining
const users = sequelize.define(
  "users",
  {
    IdUser: {
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
          args: [5, 20],
          msg: "Name must be between 5 and 20 length"
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
          args: [5, 20],
          msg: "Name must be between 5 and 20 length"
        },
      },
    },
  },
);

// categories model defining
const categories = sequelize.define(
  "categories",
  {
    IdCategory: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name is required",
        },
        len: {
          args: [1, 30],
          msg: "Name must be between 1 and 30 length"
        }
      }
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Id User is required"
        },
      },
    },
  },
);

// exercises model defining
const exercises = sequelize.define(
  "exercises", 
  {
    IdExercise: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name is required",
        },
        len: {
          args: [1, 30],
          msg: "Name must be between 1 and 30 length"
        },
      },
    },
    Sets: {
      type: DataTypes.INTEGER,
    },
    Repetitions: {
      type: DataTypes.INTEGER,
    },
    Kg: {
      type: DataTypes.INTEGER,
    },
    Description: {
      type: DataTypes.STRING(90),
      validate: {
        len: {
          args: [0, 50],
          msg: "Description must be less than 50 length"
        },
      },
    },
    IdCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Id Category is required"
        },
      },
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Id User is required"
        },
      },
    },
  }
)

export {
  sequelize,
  users,
  categories,
  exercises
};