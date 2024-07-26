import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: { type: String },

    lastName: { type: String },

    email: { type: String, required: true },

    password: { type: String},

    image: { type: String },

    //for Clerk
    clerkId: { type: String },

    role: {type: String, default: "student"},

    answers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Answer",
      },
    ],

    result: { type: Number, default: 0 },

    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true }, // automatically create "createdAt & updatedAt"
  }
);

const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;