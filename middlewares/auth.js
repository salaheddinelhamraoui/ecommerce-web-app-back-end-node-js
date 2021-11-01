const expressJWT = require('express-jwt');
require('dotenv').config();


exports.requireSignIn = expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: 'auth'
})


// check if the user signed in
exports.isAuth = (req, res, next) => {


    let user = req.profile && req.auth && (req.profile._id == req.auth._id)

    if (!user) {
        return res.status(403).json({
            error: "Access Denied"
        })
    }

    next()

}


//check if the user is an admin method 2
exports.isAdmin = (req, res, next) => {
    if (req.auth.role == 0) {
        return res.status(403).json({
            error: "Admin Resources, Access Denied !"
        })
    }

    next()
}