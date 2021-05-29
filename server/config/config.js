// Check current environment
var env = process.env.NODE_ENV || "development";
var config = require("./config.json");
var envConfig = config[env];
// Add envConfig values to process.env. So that it can be accessed anywhere inside the application.
Object.keys(envConfig).forEach((key) => (process.env[key] = envConfig[key]));
