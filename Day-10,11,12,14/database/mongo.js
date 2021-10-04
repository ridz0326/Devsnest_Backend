var mongoose = require("mongoose");

var mongodb = "mongodb://localhost:27017/User";
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: Mongodb"));