import { DataTypes } from "sequelize";
import db from '../utils/database.js';

const Task = db.define("task", {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING(500),
  },

  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

});

export default Task;