const { default: mongoose } = require("mongoose");

const databasename = "hospital"

const dbConnect = () => {
  try {
    const conn = mongoose.connect(`mongodb://localhost:27017/${databasename}`);
    console.log("bro Database Connected Successfully ✈️🚀✈️🚀");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
