import connectDB from "./db.config.js";
let conn = null;

const startServer = async () => {
  conn = await connectDB();
  console.log(`Server and database succesfully started`);
};

export { startServer, conn };
