const app = require("./app");
const connectDB = require("./config/database");

connectDB();

app.listen(3000, () => console.log("Running"));
