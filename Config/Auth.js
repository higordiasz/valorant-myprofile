const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Entre em sua conta para continuar');
    res.redirect('/login');
}

const forwardAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/painel');
}

export {
    ensureAuthenticated,
    forwardAuthenticated
}