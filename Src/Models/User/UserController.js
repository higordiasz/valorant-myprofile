import { userModel } from "./UserModel.js";
import { v4 as uuidv4 } from "uuid";
import * as Tools from "../../Tools/index.js";
import md5 from "md5";

const userController = {};

userController.getUserByEmail = async (email) => {
    let user = await userModel.findOne({ email: email });
    if (!user) return null;
    return user;
}

userController.getUsetByUsername = async (username) => {
    let user = await userModel.findOne({ username: username });
    if (!user) return null;
    return user;
}

userController.getuserByID = async (userID) => {
    let user = await userModel.findOne({ userID: userID });
    if (!user) return null;
    return user;
}

export {
    userController
}