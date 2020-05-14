const Product = require('../models/product')

postAddProduct = (req, res, next) => {
    let product = new Product(req.body.productName);
    product.save();
    res.redirect('/products');
}

getFetchAll = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('products', { pageTitle: 'Product list', productList: products });
    });
}

module.exports = {
    postAddProduct,
    getFetchAll
}