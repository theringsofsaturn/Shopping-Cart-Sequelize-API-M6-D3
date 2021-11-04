import sequelize from "../sequelize.js" // importing the instance sequelize inside sequelize.js not from "sequelize" module
import s from "sequelize";
const { DataTypes } = s;

// method define accepts two parameters: the first one is the model name (which is going to be a table name), and the second one are the attributes (which are going to be our columns).
const User = sequelize.define("user", {
    //  each table will have id as a primary key
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    // it shouldn't be null
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;