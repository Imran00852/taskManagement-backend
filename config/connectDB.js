import mongoose from "mongoose";
const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "taskManagement",
    })
    .then((c) => {
      console.log(c.connection.host);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
