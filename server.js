import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import offerRouter from "./routes/offerRoutes.js";
import userRouter from "./routes/userRoutes.js";
import tagRouter from "./routes/tagRoutes.js";
import responseRouter from "./routes/responseRoutes.js";
import contractRouter from "./routes/contractRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// SocketIO
import { Server } from "socket.io";
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Socket.IO User has connected: ${socket.id}`);
  socket.on("send_message", (data) => {
    console.log(data);
    socket.broadcast.emit("send_message", data);
  });
});

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/offer", offerRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/tag", tagRouter);
app.use("/api/v1/response", responseRouter);
app.use("/api/v1/contract", contractRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
