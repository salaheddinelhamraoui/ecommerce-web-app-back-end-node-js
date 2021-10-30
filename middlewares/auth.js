const expressJWT = require('express-jwt');


exports.requireSignIn = expressJWT({
    secret: "vdsvsdvsdkvnslkddjvksklmvlkmskdmvt",
    algorithms: ["HS256"],
    userProperty: 'auth'
})