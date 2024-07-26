import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {

    lastName: { type: String, required: true },

    email: { type: String, required: true },

    emailVerified: { type: Date },

    password: { type: String, select: false },

    image: {type: String},

    //for Google atc.
    authProviderId: { type: String },

    accounts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Account",
      },
    ],

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },

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