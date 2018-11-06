const express = require("express")
const mongoose = require("mongoose")
const cookieSession = require("cookie-session")
const passport = require("passport")
const keys = require("./config/keys")

mongoose.connect(keys.mongoConnectURL);
const app = new express()
/*====================== Models =======================125*/
require("./models/User")
/*====================== Passport =======================*/
require("./services/passport")
app.use(
    cookieSession({
        maxAge: 36000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

/*====================== Routes =======================*/
require("./routes/authRoutes")(app)
require("./routes/homeRoutes")(app)
























const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
