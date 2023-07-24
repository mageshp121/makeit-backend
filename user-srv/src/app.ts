
import express from "express";
require ('express-async-errors')
import { json } from "body-parser";
import depentencies from "./config/depentencies";
import { routes } from './routes';
import { sanitizeData } from "./libs/utils/sanitize/sanitize";
import { errorHandler,NotFoundError } from "@makeitcmn/comon";
import cookieParser from 'cookie-parser';
import helmet from "helmet";
import mongosanitizer from "express-mongo-sanitize"
import cors from 'cors';
import env from 'dotenv';
import cookieSession from "cookie-session";


env.config()

const app = express();
// app.set("trust proxy", true);
const router = express.Router();
app.use(json());
// app.use(
//       cookieSession({
//         signed: false,
//         secure:true
//       })
//     );




app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet({ xssFilter: true }));
app.use(mongosanitizer());






// sanitizing middleware
app.use((req, res, next) => {
      if (req.body) sanitizeData(req.body);
      if (req.query) sanitizeData(req.query);
      if (req.params) sanitizeData(req.params);
      next()
});

app.use(cors({
      origin: 'http://localhost:5173',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true
}));


app.use('/api', routes(depentencies));


app.all('*', async (req, res) => {
      throw new NotFoundError();
})
app.use(errorHandler);


export { app }

