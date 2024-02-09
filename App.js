import Express from "express";
import dotenv from "dotenv";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import session from "express-session";
import expressFlash from "express-flash";
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

//Flash
app.use(expressFlash());
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

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
app.use('/login', Routers.loginRouter);
app.use('/painel', Routers.painelRouter);
app.use('/', (req, res, next) => {
    res.status(200).send({ message: "Teste" });
});

app.use((req, res, next) => {
    return res.redirect('/');
})

export {
    app
};