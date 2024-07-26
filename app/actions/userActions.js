"use server";

import connectDB from "@/utils/database";
import User from "@/models/userModel";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { CredentialsSignin } from "next-auth";
import { signIn } from "@/auth";



export const registerUser = async (formData) => {
  const firstName=formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password=formData.get("password");

  await connectDB();
  const existingUser = await User.findOne({email});
  if(existingUser) {
    return null;
  }

const hashedPassword = await hash(password, 12);

  const user=await User. create({
    firstName, lastName, email, password: hashedPassword
  })

const plainUser = JSON.parse(JSON.stringify(user));
console.log(plainUser);
redirect("/auth/login");
};


// export const loginUser = async (formData) => {
//   const email = formData.get("email");
//   const password = formData.get("password");

//   try {
//     await signIn("Credentials", {
//       redirect: false,
//       callbackUrl: "/auth/login",
//       email,
//       password,
//     });
//   } catch (error) {
//     const someError = error;
//     return someError.cause;
//   }
//   redirect("/profile");
// };


export const loginUser = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

try {
  await signIn("Credentials", {
    email,
    password,
    redirect: false,
    callbackUrl: "/profile",
  });
  
} catch (error) {
  const someError = error;
    return someError.cause;
}
redirect("/profile")
};