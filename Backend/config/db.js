import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Successfully connection in DB ${mongoose.connection.host}`.
      bgCyan.white
    );
  } catch (error) {
    console.log(`Error in connection DB ${error}`.bgRed.white);
  }
};

export default connectDB;