import express, { Request, Response, ErrorRequestHandler } from "express";
import path from "path";
import dotenv from "dotenv";
import apiRoutes from "./routes/api";
import cors from "cors";
import { MulterError } from "multer";
import {MongoDB} from '../src/db/mongo'

MongoDB()

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));
server.use(
  cors({
    origin: "*",
  })
);

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado." });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400);

  if (err instanceof MulterError) {
    res.json({ error: err.code });
  } else {
    console.log(err);
    res.json({ error: "ocorreu algum erro" });
  }
};

server.use(errorHandler);

server.listen(process.env.PORT);
