import mongoose from "mongoose";

const connectToDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("its working u son of a bitch");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDataBase;
