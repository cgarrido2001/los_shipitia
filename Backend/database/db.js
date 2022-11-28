const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_ATLAS, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connectado");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
