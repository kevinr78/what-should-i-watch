const errorCode = {
  200: "Request Success",
  201: "Resource Created",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
};

const createAndThrowError = function (
  msg = "Something went wrong",
  statusCode = 500
) {
  const error = new Error(msg);
  error.statusCode = statusCode;
  return error;
};

export { errorCode, createAndThrowError };
