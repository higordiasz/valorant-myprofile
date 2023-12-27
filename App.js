import Express from "express";
import dotenv from "dotenv";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import session from "express-session";
import { configPassport } from "./Config/Passport.js";
import connectMongo from "./Database/Connection.js";
import * as Tools from "./Src/Tools/index.js";

configPassport(passport);

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config();

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({
    extended: true
}));

app.set('trust proxy', true);
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        start: Date.now()
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/public", Express.static(path.join(__dirname, "Src/Public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Src/Views"));

connectMongo();

app.use((req, res, next) => {
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http"))
        res.redirect(`https://${req.headers.host}${req.url}`);
    else
        next();
});

import * as Routers from "./Src/Routers/index.js";
app.use('/p', Routers.profileRouter);
app.use('/', (req, res, next) => {
    res.status(200).send({ message: "Teste" });
});

app.use((req, res, next) => {
    return res.redirect('/');
})

export {
    app
};