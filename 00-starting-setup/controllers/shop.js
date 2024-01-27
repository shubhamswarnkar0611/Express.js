const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      product: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productID
    Product.findProductById(prodId,product=>{
      res.render('shop/cart',{
        product,
        path: '/cart',
        pageTitle: 'Your Cart'
      })
    })
    
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

exports.getProductId=(req,res,next)=>{
  const productId = req.params.ProductId;
  Product.findProductById(productId,product =>{
    res.render('shop/product-detail',{
      product: product,
      pageTitle: 'Product Detail',
      path: `/products`

    })
  })
  


  // res.redirect("/");
  
  }