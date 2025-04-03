import mongoose from "mongoose";
import { db1 } from "../../config/db.js";
const Schema = mongoose.Schema;
const user1Schema = new Schema(
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
const User1 = db1.model("User1", user1Schema);
export default User1;
