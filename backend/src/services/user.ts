import User, { IUser, ILogin } from "../models/user.model";
import bcrypt from "bcrypt";
var jwt = require("jsonwebtoken");

class UserService {
  async create(data: IUser) {
    let user = await User.findOne({ email: data.email });

    if (user) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    user = await User.create({ ...data, password: hashedPassword });
    return user;
  }

  async login(data: ILogin) {
    const user = await User.findOne({ email: data.email });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, userLocation: user.address },
      process.env.SECRETE,
      {
        expiresIn: "1h",
      }
    );

    return {
      token: token, 
      user
    };
  }
}

export default UserService;
