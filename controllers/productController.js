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

// @desc  Create a new product
// @route POST /api/products
async function createProduct(req, res) {
	try {
		const product = {
			title: "test product",
			description: "this is my product",
			price: 100,
		};
		const newProduct = await Product.create(product);
		res.writeHead(201, { "Content-Type": "application/json" });
		return res.end(JSON.stringify(newProduct));
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	getProducts,
	getProduct,
	createProduct,
};
