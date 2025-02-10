const verifyData = function (...args) {
  let result = true;
  for (const arg of args) {
    if (arg === null || arg === undefined || arg === "") {
      result = false;
    }
  }

  return result;
};

export default verifyData;
