import { DataTypes } from "sequelize";
import db from '../utils/database.js';

const Task = db.define("task", {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
  },

  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

});

export default Task;