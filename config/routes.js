module.exports = function (app) {
	// home route
	app.get("/", function (req, res) { res.redirect("/index.html"); });
};
