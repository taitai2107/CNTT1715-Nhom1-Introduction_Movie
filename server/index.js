const express = require("express");
const app = express();
require("dotenv").config();
const useCors = require("./src/config/cors");
const useRoutes = require("./src/routes/index");
useCors(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
useRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`sever is running on ${PORT}`);
});
