import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: { type: String },

    lastName: { type: String },

    email: { type: String, required: true },

<<<<<<< HEAD
    grupa: { type: String },

    password: { type: String },
=======
    group: { type: String, default: "0", unique: true},
>>>>>>> ef6e9fdb3ec8d683e8d9faa281c7b7d9ea12e632

    password: { type: String, unique: true },

    image: { type: String, unique: true },

    //for Clerk
    clerkId: { type: String },

    role: { type: String, default: "student" },

    answers: [
      {
        type: String,
        default: "0",
      },
    ],

    result: { type: Number, default: 0 },

    updatedAt: { type: Date, default: Date.now }, // corectat typo-ul aici
  },
  {
    timestamps: { createdAt: true, updatedAt: true }, // automatically create "createdAt & updatedAt"
  }
);

const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
