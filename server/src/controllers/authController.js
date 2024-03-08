const servicesAuth = require("../services/authServices");
class authUser {
  constructor() {}
  async createUser(req, res) {
    try {
      let result = await servicesAuth.handleCreateUser(req.body);
      if (result) {
        res.json(result);
      }
    } catch (error) {
      res.json(error);
    }
  }
  async loginUser(req, res) {
    try {
      let user = await servicesAuth.handleLogin(req.body);
      if (user) {
        console.log(user);
        res.json(user);
      }
    } catch (error) {
      res.json(error);
    }
  }
  async getAll(req, res) {
    try {
      const data = await servicesAuth.getAllUser(req.body);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  }
}
module.exports = new authUser();
