import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
      
    },
    lastName: {
      type: String,
      required: true,
    
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      
    },
    password: {
      type: String,
      required: true,
      
    },
    confirmPassword: {
      type: String,
      required: true,
    
    },
    booking: {
      type: [String]
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);