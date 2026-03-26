const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const app = require("./src/app");

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}).catch(err => {
  console.log(err);
})