const db = require("../models/index");
const { Op, where } = require("sequelize");
var jwt = require("jsonwebtoken");

class servicesAuth {
  constructor() {}

  async handleCreateUser({ email, username, password }) {
    if (!email || !username || !password) {
      return {
        EC: -1,
        EM: "chưa điền đầy đủ thông tin",
      };
    }
    try {
      console.log(username, password, email);
      const [user, created] = await db.User.findOrCreate({
        where: { username },
        defaults: {
          email,
          username,
          password,
        },
      });
      if (!created) {
        return {
          EC: -1,
          EM: "tài khoản đã tồn tại",
        };
      }
      if (created) {
        return {
          EC: 0,
          EM: "tài khoản được tạo thành công",
        };
      }
    } catch (error) {
      console.log("check e : ", error);
      throw {
        EC: -5,
        EM: "lỗi sever",
      };
    }
  }

  async handleLogin({ valueInput, password }) {
    try {
      console.log(`check email: ${valueInput}`);
      let account = await db.User.findOne({
        where: {
          [Op.or]: [{ email: valueInput }, { username: valueInput }],
        },
      });

      if (!account) {
        return {
          EC: -1,
          EM: `tài khoản không tồn tại`,
          token: null,
        };
      } else if (account) {
        if (password !== account.password) {
          return {
            EC: -1,
            EM: `sai mật khẩu`,
            token: null,
          };
        } else {
          let payload = {
            id: account.id,
            username: account.username,
          };
          let access_token = process.env.ACCESS_TOKEN_SECRET;
          console.log(access_token);
          let expires = { expiresIn: "1d" };
          let token = jwt.sign(payload, access_token, expires);
          token = "Bearer" + " " + token;
          return {
            EC: 0,
            EM: `đăng nhập thành công`,
            token: token,
          };
        }
      }
    } catch (error) {
      console.log(error);
      throw {
        EC: 5,
        EM: `lỗi mạng`,
        token: null,
      };
    }
  }
  async getAllUser() {
    try {
      let all = await db.User.findAll();
      console.log("test find :", all);
      return {
        EC: 0,
        EM: all,
      };
    } catch (error) {
      console.log(error);
      throw {
        EC: -5,
        EM: "lỗi mạng",
      };
    }
  }
}
module.exports = new servicesAuth();
