import mongoose from "mongoose";
import { Schema } from "mongoose";

const AccountSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, // user id
      ref: "User",
      required: true,
    },
    provider: {type: String, required: true},
    providerAccountId: {
      type: String,
      required: true,
    },
    refresh_token: {
      type: String,
      default: null,
    },
    access_token: {
      type: String,
      default: null,
    },
    expires_at: {
      type: Number,
      default: null,
    },
    token_type: {
      type: String,
      default: null,
    },
    scope: {
      type: String,
      default: null,
    },
    id_token: {
      type: String,
      default: null,
    },
    session_state: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // automatically create "createdAt & updatedAt"
  }
);

// Ensure unique combination of provider and providerAccountId
AccountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });

const Account =
  mongoose.models.Account || mongoose.model("Account", AccountSchema);
export default Account;
