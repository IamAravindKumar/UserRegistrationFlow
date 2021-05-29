const mongoose = require("mongoose");

//DB Credentials ---> { user: "employeedb_owner", pwd: "employee2021" }
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (!err) {
    console.log("MongoDB Connection Succeeded.");
  } else {
    console.log("Error in DB connection: " + JSON.stringify(err, null, 2));
  }
});

require("./models/user");
