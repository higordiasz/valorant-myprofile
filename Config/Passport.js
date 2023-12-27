import { Strategy } from "passport-local";
import { userController } from "../Src/Models/index.js";
import md5 from "md5";

const configPassport = function (passport) {
    passport.use(
        new Strategy({ usernameField: 'username' }, async (username, password, done) => {
            if (username.includes('@')) {
                let user = await userController.getUserByEmail(username);
                if (user != null) {
                    let md5Password = md5(password);
                    if (md5Password == user.password) {
                        return done(null, user, { message: 'Usuario conectado' });
                    } else {
                        return done(null, false, { message: 'Usuario ou senha incorreto.' });
                    }
                } else {
                    return done(null, false, { message: 'Usuario ou senha incorreto.' });
                }
            } else {
                let user = await userController.getUserByUsername(username);
                if (user != null) {
                    let md5Password = md5(password);
                    if (md5Password == user.password) {
                        return done(null, user, { message: 'Usuario conectado' });
                    } else {
                        return done(null, false, { message: 'Usuario ou senha incorreto.' });
                    }
                } else {
                    return done(null, false, { message: 'Usuario ou senha incorreto.' });
                }
            }
        })
    );
    passport.serializeUser(function (user, done) {
        done(null, user.userID);
    });
    passport.deserializeUser(async function (userID, done) {
        if (await userController.getUserByID(userID) != null) {
            return done(null, await userController.getUserByID(userID));
        } else {
            return done(null, null);
        }
    });
}

export {
    configPassport
}