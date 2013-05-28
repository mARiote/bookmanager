module.exports = function (app) {
	// home route
	app.get("/", function (req, res) { res.redirect("/index.html"); });

	// Authors
	app.get("/authors", function (req, res) {
		res.writeHead(200,  {'Content-Type': 'application/json'});
		var output = {	success: 'true',
						data: [
							{name: 'Author 1'},
							{name: 'Author 2'},
							{name: 'Author 3'}
						],
						total: 3
		};
		res.end(JSON.stringify(output));
	});
};
