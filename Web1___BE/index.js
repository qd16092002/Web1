import express from "express";
import cookieParser from "cookie-parser";
import "./loadEnvironment.js"; // Nạp biến môi trường
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import { authencationRouter } from "./src/routers/index.js";
import { db1, db2 } from "./src/config/db.js";

// Khởi tạo Express app và HTTP server
const app = express();
const port = process.env.PORT ?? 3000;
const server = http.createServer(app); // Tạo HTTP server chung với Express

// Middleware và cấu hình CORS
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS", "PATCH"],
  credentials: true,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "device-remember-token",
    "Access-Control-Allow-Origin",
    "Origin",
    "Accept",
  ],
};
app.use(cors(corsOptions));

// Sử dụng body-parser để xử lý dữ liệu JSON và URL encoded
app.use(cookieParser());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Định tuyến (Routers)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", authencationRouter);

// Bắt lỗi toàn cục
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

// Khởi động server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
