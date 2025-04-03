import mongoose from "mongoose";
import { db2 } from "../../config/db.js";
const Schema = mongoose.Schema;
const user2Schema = new Schema(
  {
    email: {
      type: String,
    },
    fullName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const User2 = db2.model("User2", user2Schema);
export default User2;
