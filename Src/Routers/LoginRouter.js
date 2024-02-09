import { Router } from "express";
import { forwardAuthenticated, ensureAuthenticated } from '../../Config/Auth.js';
import loginController from "../Controllers/LoginController.js";

const loginRouter = Router();

loginRouter.get('/', forwardAuthenticated, loginController.load)

loginRouter.post('/', forwardAuthenticated, loginController.login)

loginRouter.get('/save', ensureAuthenticated, loginController.saveSession)

loginRouter.post('/create', loginController.create);

export {
    loginRouter
}