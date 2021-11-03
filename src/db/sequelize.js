import { Sequelize } from "sequelize";
const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  { host: process.env.PGHOST, dialect: "postgres" }
);

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established"))
  .catch((e) => console.log("Unable to establish connection:", e));
