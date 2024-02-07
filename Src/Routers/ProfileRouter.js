import { Router } from "express";
import profileController from "../Controllers/ProfileController.js";

const profileRouter = Router();

profileRouter.all('/:profile', profileController.getProfile)

export {
    profileRouter
}