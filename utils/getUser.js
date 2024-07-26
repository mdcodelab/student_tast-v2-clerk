
import User from "@/models/userModel";

export const getUserByEmail = async (email) => {
  try {
    await connectDB();
    return await User.findOne({ email: email });
  } catch (error) {
    console.error("Error in getUserByEmail:", error); 
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    await connectDB();
    return await User.findById(id);
  } catch (error) {
    console.error("Error in getUserById:", error);
    return null;
  }
};

export const getAllUsers = async () => {
  try {
    await connectDB();
    return await User.find({});
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    return [];
  }
};
