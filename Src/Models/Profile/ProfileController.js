import { profileModel } from "./ProfileModel.js";
import { v4 as uuidv4 } from "uuid";
import * as Tools from "../../Tools/index.js";
import md5 from "md5";

const profileController = {};

profileController.load = async (userID) => { };

profileController.loadAccount = async (account) => { };

profileController.save = async (profile) => { };

export {
    profileController
}