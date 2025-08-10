import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  
  createdAt: { type: Date, default: Date.now }, // تاریخ ایجاد
});

export default mongoose.models.Permission ||
  mongoose.model("Permission", permissionSchema);
