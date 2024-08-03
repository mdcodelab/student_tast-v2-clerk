"use server";
import connectDB from "@/utils/database";
import User from "@/models/userModel";

const correctAnswers = [
  2, 2, 0, 1, 1, 1, 0, 2, 0, 1, 2, 1, 0, 2, 1, 2, 0, 0, 1, 2, 1, 0, 2, 1, 0, 0,
  2, 1, 0, 0,
];

export const getGroup= async (group)=> {
  return group
}


export const getAnswers = async (values) => {
  console.log(values);
  return values;
};

export const calculateResult = async (values) => {
  const studentAnswers = await getAnswers(values);
  let totalScore = 0;

  for (let i = 0; i < studentAnswers.length; i++) {
    if (
      studentAnswers[i] !== null &&
      studentAnswers[i].toString() === correctAnswers[i].toString()
    ) {
      totalScore += 0.3;
    }
  }

  const finalScore = totalScore + 1;
  console.log(finalScore); // Print the final score for debugging
  return finalScore;
};



export const updateUser = async (clerkId, values, group) => {
  await connectDB();

  // Find user by clerkId in MongoDB
  const user = await User.findOne({ clerkId });

  if (user) {
    const answers = await getAnswers(values);
    const result = await calculateResult(values);
    const setGroup = await getGroup(group);

    // Update the user's answers and result
    user.group=setGroup;
    user.group=group;
    user.answers = answers;
    user.result = result;
    await user.save();
  } else {
    console.log("There is no user");
  }

  console.log("Userul meu este:", user);
  console.log("Userul meu in stringify este:", JSON.stringify(user));

  return JSON.stringify(user); // Return the user, serialized
};
