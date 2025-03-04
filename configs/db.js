const mongoose = require("mongoose");
const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(process.env.MONGO_URL);
    }
  } catch (error) {
    console.log("DB connection has error =>", error);
  }
};
export default connectToDB;
