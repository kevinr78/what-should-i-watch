import { createAndThrowError } from "../../utils/error.js";
import {
  createAndSaveUser,
  genSaltAndHashPassword,
  findUser,
  comparePasswords,
} from "../../services/User/user.service.js";
import verifyData from "../../utils/validateData.js";
import { createJWTToken } from "../../middleware/JWT/JWT.js";

const userLogin = async function (req, res, next) {
  let isErr;
  const { email, password } = req.body;
  try {
    isErr = verifyData(email, password);
    if (!isErr) {
      throw createAndThrowError("Incomplete Data", 404);
    }

    const user = await findUser({ email: email }, "login");
    const hashedPassword = await comparePasswords(password, user.password);
    const token = createJWTToken(user.id);

    res.status(200).json({
      message: "User verified",
      data: user,
      token,
      ok: true,
    });
  } catch (error) {
    next(error);
  }
};

const userSignup = async function (req, res, next) {
  let isErr;
  const { name, email, password } = req.body;
  try {
    isErr = verifyData(name, email, password);
    if (!isErr) {
      throw createAndThrowError("Please fill all fields", 404);
    }
    const user = await findUser({ email: email }, "signup");
    if (user) {
      throw createAndThrowError("Email already exists", 400);
    }

    const hashedPassword = await genSaltAndHashPassword(password);
    const result = await createAndSaveUser(name, email, hashedPassword);
    const token = createJWTToken(result.id);

    res.status(201).json({
      message: "User created successfully",
      data: result,
      token,
      ok: true,
    });
  } catch (error) {
    next(error);
  }
};

export { userSignup, userLogin };
