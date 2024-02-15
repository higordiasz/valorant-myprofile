import { Router } from "express";
import { forwardAuthenticated, ensureAuthenticated } from '../../Config/Auth.js';
import loginController from "../Controllers/LoginController.js";

const loginRouter = Router();

loginRouter.get('/login', forwardAuthenticated, loginController.load)

loginRouter.post('/login', forwardAuthenticated, loginController.login)

loginRouter.get('/logout', (req, res, next) => {
    if (req.session)
        req.session.destroy();
    return res.redirect('../login');
})

loginRouter.get('/save', ensureAuthenticated, loginController.saveSession)

loginRouter.post('/create', loginController.create);

export {
    loginRouter
}