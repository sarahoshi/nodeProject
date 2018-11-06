const requireLogin = require('./../middlewares/requireLogin')

module.exports = (app) => {
    app.get("/api/servey", requireLogin, (req, res) => {
        res.send("Success")
    })
}