import { Sequelize } from "sequelize";
// const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  { host: process.env.PGHOST, dialect: "postgres" }
);

export const syncSequelize = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({});
  } catch (error) {
    console.log(error);
  }
};

//   .authenticate()
//   .then(() => console.log("Connection has been established"))
//   .catch((e) => console.log("Unable to establish connection:", e));

export default sequelize;
