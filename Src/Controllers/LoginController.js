import * as Tools from "../Tools/index.js";
import { userController } from "../Models/index.js";
import Passport from "passport";

const loginController = {};

loginController.load = async (req, res, next) => {
    let e = req.sessionStore.sessions[Object.keys(req.sessionStore.sessions)];
    if (e != null) {
        if (e.indexOf("Missing Credentials") > -1) {
            res.render('Login', { message: 'Preencha todos os campos' })
        } else {
            if (e.indexOf("Usuario ou senha errado") > -1) {
                res.render('Login', { message: "Usuário ou senha errado" });
            } else {
                res.render('Login', { message: '' });
            }
        }
    } else {
        res.render('login', { message: '', tipo: 1 });
    }
}

loginController.login = async (req, res, next) => {
    Passport.authenticate('local', {
        successRedirect: '/painel',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
}

loginController.saveSession = async (req, res, next) => {
    res.redirect('../painel');
}

loginController.create = async (req, res, next) => {
    let body = req.body;
    if (!body.username || !isNaN(body.email)) return res.status(200).send({ error: true, message: "Username invalid", data: {} });
    if (!body.email || !isNaN(body.email)) return res.status(200).send({ error: true, message: "Email invalid", data: {} });
    if (!(body.email.includes("@"))) return res.status(200).send({ error: true, message: "Email invalid", data: {} });
    if (!body.password) return res.status(200).send({ error: true, message: "Password invalid", data: {} });
    let create = await userController.createUser(body.username, body.email, body.password);
    return res.status(200).send({ error: create.error, message: create.message });
}

export default loginController;