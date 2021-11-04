import express from "express";
import cors from "cors";
import { connectDB } from "../src/db/sequelize.js";
import usersRouter from "./services/users/index.js";

const server = express(); // const app = express();
const port = 3001; //server to listen on the port, it is stored into a variable

// server.use(loggerMiddleware)
//cors and express are middlewares
server.use(express.json()); //this has to be specified BEFORE the routes, otherwise the body will be undefined *** the same as app.use(express.json());
server.use(cors()); //cors connects BE with FE *** the same as app.use(cors());

// *********************** ROUTES ***************************
// server.use("/cart", cartRouter);
// server.use("/products", productsRouter);
// server.use("/reviews", reviewsRouter);
server.use("/users", usersRouter);
// server.use("/categories", categoriesRouter);

server.listen(port, async () => {
  try {
    console.log(`❤ Server is running on port ${port}`);
    await connectDB();
  } catch (error) {
    console.log(error);
  }
});
