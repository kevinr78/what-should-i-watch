import { errorCode } from "../../utils/error.js";

const errorMiddleware = function (error, req, res, next) {
  const err = new Error(error.message);
  err.status = error.status || 500;
  err.message = error.message || errorCode[err.status];
  res.status(err.status).send({ message: err.message, data: null, ok: false });
};

export default errorMiddleware;
