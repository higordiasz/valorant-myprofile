import { Router } from "express";
import { valorant } from "../Tools/index.js";

const profileRouter = Router();

profileRouter.all('/:profile', async (req, res, next) => {
    let params = req.params;
    if (params.profile != null)
        return res.render("Profile");
    return res.status(200).send({ message: "Error" });
})

export {
    profileRouter
}