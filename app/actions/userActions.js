"use server";
import connectDB from "@/utils/database";
import User from "@/models/userModel";

const correctAnswers = [
  2, 2, 0, 1, 1, 1, 0, 2, 0, 1, 2, 1, 0, 2, 1, 2, 0, 0, 1, 2, 1, 0, 2, 1, 0, 0,
  2, 1, 0, 0,
];

<<<<<<< HEAD
export const getGrupa = async ()=> {
  return grupa;
=======
export const getGroup = async (group)=> {
  return group;
>>>>>>> ef6e9fdb3ec8d683e8d9faa281c7b7d9ea12e632
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

<<<<<<< HEAD
export const updateUser = async (clerkId, values, grupa) => {
=======

export const updateUser = async (clerkId, values, group) => {
>>>>>>> ef6e9fdb3ec8d683e8d9faa281c7b7d9ea12e632
  await connectDB();

  // Find user by clerkId in MongoDB
  const user = await User.findOne({ clerkId });

  if (user) {
    const answers = await getAnswers(values);
    const result = await calculateResult(values);
    const setGrupa = await getGrupa(grupa);

    // Update the user's answers and result
<<<<<<< HEAD
    user.grupa=grupa;
=======
    user.group=group;
>>>>>>> ef6e9fdb3ec8d683e8d9faa281c7b7d9ea12e632
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
