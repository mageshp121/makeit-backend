import express from "express";
require("express-async-errors");
import depentencies from "./config/dependencies";
import { routes } from "./routes";
// import { sanitizeData } from "./libs/utils/sanitize/sanitize";
import { errorHandler, NotFoundError } from "@makeitcmn/comon";
import cookieParser from "cookie-parser";
// import helmet from "helmet";
// import mongosanitizer from "express-mongo-sanitize";
import cors from "cors";
import env from "dotenv";

env.config();

const app = express();
const router = express.Router();
app.use(express.json({ limit: "1000mb" }));
app.use(
  express.urlencoded({ limit: "1000mb", extended: true, parameterLimit: 50000 })
);
// app.use(cookieParser());
// app.use(helmet({ xssFilter: true }));
// app.use(mongosanitizer());

// // sanitizing middleware
// app.use((req, res, next) => {
//   if (req.body) sanitizeData(req.body);
//   if (req.query) sanitizeData(req.query);
//   if (req.params) sanitizeData(req.params);
//   next();
// });

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/api", routes(depentencies));

app.all("*", async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };