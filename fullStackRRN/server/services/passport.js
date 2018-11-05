const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const keys = require("../config/keys")
const mongoose = require("mongoose")
const User = mongoose.model("users")
// is called when GoogleStrategy end
passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecet,
    callbackURL: keys.callbackURL,
    proxy: true
  },
  async (accessToken, refreshToken, profile, callback) => {
    let data = await User.findOne({googleId: profile.id});
        if(data)  return callback(null, data);
        let newUser = {
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            gender: profile.gender
        }
        let user = await new User(newUser).save()
        return callback(null, user)
  }))