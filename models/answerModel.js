import mongoose from "mongoose";

const {Schema} = mongoose;

const AnswerSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,//use user id
      ref: "User",
      required: true,
    }, 
    answers: [
      {
        type: String,
        required: true,
        default: "0"
      }
    ],
      result: {
        type: Number,
        default: 0
      },
  },
  { timestamps: true } //automatically create "createdAt & updatedAt"
);

const Answer = mongoose.models.Answer || mongoose.model("Answer", AnswerSchema);
export default Answer;
