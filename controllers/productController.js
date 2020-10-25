const Product = require("../models/productModel");

// @desc  Get All Products
// @route GET /api/products
async function getProducts(req, res) {
	try {
		const products = await Product.findAll();
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(products));
	} catch (erro) {
		console.log(error);
	}
}

// @desc  Get Single Product
// @route GET /api/product/id
async function getProduct(req, res, id) {
	try {
		const product = await Product.findById(id);
		if (!product) {
			res.writeHead(404, { "Content-Type": "application/json" });
			res.end({ message: "Product Not Found" });
		} else {
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(product));
		}
	} catch (erro) {
		console.log(error);
	}
}

module.exports = {
	getProducts,
	getProduct,
};
