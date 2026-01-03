import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY.");
    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT :${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
