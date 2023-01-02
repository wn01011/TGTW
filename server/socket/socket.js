import { Server } from "socket.io";

const worldsArr = ["whole", "world1", "world2", "world3"];

export default function (server) {
  const io = new Server(server, {
    cors: {
      origin: "http://locahost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    socket.on("ROOM", () => {
      worldsArr.map((item) => {
        socket.join(item);
      });
      console.log(socket.rooms);
    });
    socket.on("JOIN_ROOM", (data) => {
      console.log(data);
      io.emit("enter", data);
    });

    socket.on("message", (data) => {
      console.log("client가 보낸 데이터 : ", data);

      console.log(socket.rooms);
      io.to(data.room).emit("upload", data);
    });
    socket.on("noticeMessage", (data) => {
      io.emit(data);
    });
    socket.on("leaveUser", (nick) => {
      io.emit("out", nick);
    });
    socket.on("disconnect", () => {
      console.log("disconnect");
    });
  });
}
