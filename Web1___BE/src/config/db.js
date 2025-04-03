// src/config/db.js
import mongoose from "mongoose";

const db1 = mongoose.createConnection(process.env.DB_URL, {
  serverSelectionTimeoutMS: 30000,
});

const db2 = mongoose.createConnection(process.env.DB_URL_2, {
  serverSelectionTimeoutMS: 30000,
});

db1.on("connected", () => console.log("DB1 connected"));
db2.on("connected", () => console.log("DB2 connected"));

export { db1, db2 };
