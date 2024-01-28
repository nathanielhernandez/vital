import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:4000";

const socket = io(URL, { autoConnect: false });
socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
