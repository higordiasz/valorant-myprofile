import { Router } from "express";

const loginRouter = Router();

loginRouter.all('/singup', (req, res, next) => {
    return res.render("SingUp");
})

loginRouter.all('/singin', (req, res, next) => {
    return res.render("SingIn");
})

export {
    loginRouter
}