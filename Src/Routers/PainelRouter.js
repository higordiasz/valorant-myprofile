import { Router } from "express";
import { forwardAuthenticated, ensureAuthenticated } from '../../Config/Auth.js';
import painelController from "../Controllers/PainelController.js";

const painelRouter = Router();

painelRouter.all('/', ensureAuthenticated, (req, res, next) => {
    res.render('Painel');
})

export {
    painelRouter
}