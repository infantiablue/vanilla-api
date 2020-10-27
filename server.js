const http = require("http");
const { getProducts, getProduct, createProduct, updateProduct } = require("./controllers/productController");

const server = http.createServer((req, res) => {
	if (req.url == "/api/products" && req.method == "GET") {
		getProducts(req, res);
	} else if (req.url.match(/\/api\/products\/\w+/)) {
		console.info(req.url);
		const id = req.url.split("/")[3];
		getProduct(req, res, id);
	} else if (req.url.match(/\/api\/product\/\w+/) && req.method == "PUT") {
		const id = req.url.split("/")[3];
		updateProduct(req, res, id);
	} else if (req.url == "/api/products" && req.method == "POST") {
		createProduct(req, res);
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ message: "Route Not Found" }));
	}
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API Server is running at port ${PORT}`));
