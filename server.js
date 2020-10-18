const http = require("http");
const products = require("./data/products.json");
const server = http.createServer((req, res) => {
	if (req.url == "/api/products" && req.method == "GET") {
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(products));
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ message: "Router Not Found" }));
	}
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API Server is running at port ${PORT}`));
