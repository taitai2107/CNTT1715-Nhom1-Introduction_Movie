const auth = require("./auth");

const useRoutes = (app) => {
  app.use("/api/v1/auth", auth);
};

module.exports = useRoutes;
