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

userController.getUserByUsername = async (username) => {
    let user = await userModel.findOne({ username: username });
    if (!user) return null;
    return user;
}

userController.getUserByID = async (userID) => {
    let user = await userModel.findOne({ userID: userID });
    if (!user) return null;
    return user;
}

userController.createUser = async (username, email, password) => {
    let ret = new Tools.SystemMessage;
    let user = await userModel.findOne({ username: username });
    if (user) {
        ret.error = true;
        ret.message = "User already exist"
        return ret;
    }
    user = await userModel.findOne({ email: email });
    if (user) {
        ret.error = true;
        ret.message = "E-mail already registered"
        return ret;
    }
    let create = await userModel.create({
        username: username,
        email: email,
        password: md5(password),
        accounLink: false,
        userID: uuidv4(),
        created: new Date(Date.now()).toString(),
    }).then(() => {
        return true;
    }).catch((error) => {
        console.log(error)
        return false;
    });
    if (!create) {
        ret.error = true;
        ret.message = "Error registering the user, contact the administrator";
        return ret;
    }
    ret.message = "Registration completed successfully";
    return ret;
}

export {
    userController
}