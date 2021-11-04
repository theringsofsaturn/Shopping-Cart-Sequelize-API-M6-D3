import { Sequelize } from "sequelize";
const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  port: PGPORT,
  host: PGHOST,
  dialect: "postgres",
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB is authenticated")
    await sequelize.sync({});
    console.log("DB is established")
  } catch (error) {
    console.log(error);
  }
};

//   .authenticate()
//   .then(() => console.log("Connection has been established"))
//   .catch((e) => console.log("Unable to establish connection:", e));

export default sequelize;
