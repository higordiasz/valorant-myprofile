import { Router } from "express";

const loginRouter = Router();

loginRouter.all('/', (req, res, next) => {
    return res.render("Login");
})

export {
    loginRouter
}