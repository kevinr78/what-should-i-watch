import bcrypt from "bcryptjs";
import { createAndThrowError } from "../../utils/error.js";
import userModel from "../../models/User/user.model.js";

const genSaltAndHashPassword = async function (password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    return hashPassword;
  } catch (error) {
    throw createAndThrowError("Error while hashing password", 500);
  }
};

const comparePasswords = async function (plaintext, hashedPassword) {
  const isPasswordVerified = await bcrypt.compare(plaintext, hashedPassword);
  if (!isPasswordVerified) {
    throw createAndThrowError("Passwords do not match", 404);
  }
  return isPasswordVerified;
};

const createAndSaveUser = async function (name, email, hashPassword) {
  const user = new userModel({
    name,
    email,
    password: hashPassword,
  });

  try {
    const result = await user.save();
    return result;
  } catch (err) {
    throw createAndThrowError("Error while creating user", 500);
  }
};

const findUser = async function (query, type) {
  const user = await userModel.findOne(query);
  if (!user && type !== "signup") {
    throw createAndThrowError("User not found", 404);
  }
  return user || null;
};

export {
  createAndSaveUser,
  genSaltAndHashPassword,
  findUser,
  comparePasswords,
};
