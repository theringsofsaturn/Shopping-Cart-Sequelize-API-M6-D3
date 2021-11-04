import { Sequelize } from "sequelize";
// Destructuring .env variables
const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT, NODE_ENV } =
  process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  port: PGPORT,
  host: PGHOST,
  dialect: "postgres", // since there are many sequelize, we specify the dialect
  // when we deploy we need to provide some extra configurations but those configurations are going to work only for the cloud and not going to work locally.
  // So, we will conditionally check:
  // if the environment is in development, skip this configurations, but if it's in production, add this configurations. Lets call these dialect options:

  // if NODE_ENV === 'production' -->> provide dialectOptions : otherwise not
  ...(NODE_ENV === "production" && {
    dialectOptions: {
      ssl: {
        required: true,
        rejectUnauthorized: false,
      },
    },
  }),
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("❤ DB is authenticated");
    await sequelize.sync({});
    console.log("❤ DB is established");
  } catch (error) {
    console.log(error);
  }
};

//   .authenticate()
//   .then(() => console.log("Connection has been established"))
//   .catch((e) => console.log("Unable to establish connection:", e));

export default sequelize;
