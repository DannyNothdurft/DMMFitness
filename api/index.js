import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";






const PORT = process.env.PORT || 4000;



const app = express();
app.use(express.json());
dotenv.config();


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((err) => {
        console.log(err.message);
    });


mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


app.use("/api/hotels", hotelsRoute);
  app.use("/api/rooms", roomsRoute);
 
  app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  

 

const server = app.listen(() =>
    console.log(`Server started on ${process.env.PORT}`)
);