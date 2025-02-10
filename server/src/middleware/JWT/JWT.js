import JWT from "jsonwebtoken";
import { createAndThrowError } from "../../utils/error.js";

const createJWTToken = (id) => {
  const token = JWT.sign({ id }, process.env.SECRET_KEY);
  return token;
};

const verifyJWTToken = (req, res, next) => {
  // verify token logic here

  const authHeaderToken = req.headers.authorization.split(" ")[1];
  if (!authHeaderToken) return createAndThrowError("No token found", 401);

  const isVerified = JWT.verify(authHeaderToken, process.env.SECRET_KEY);
  if (!isVerified) return createAndThrowError("Invalid token", 401);

  req.user = isVerified;

  next();
};

export { createJWTToken, verifyJWTToken };
