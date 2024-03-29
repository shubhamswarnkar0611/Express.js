const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findByPk(prodId)
    .then((product) => {
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts();
    })
    .then((product) => {
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
// Cart.getCart(cart => {
//   Product.fetchAll(products => {
//     const cartProducts = [];
//     for (product of products) {
//       const cartProductData = cart.products.find(
//         prod => prod.id === product.id
//       );
//       if (cartProductData) {
//         cartProducts.push({ productData: product, qty: cartProductData.qty });
//       }
//     }
//     res.render('shop/cart', {
//       path: '/cart',
//       pageTitle: 'Your Cart',
//       products: cartProducts
//     });
//   });
// });

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;

  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }
      var newQuantity = 1;
      if (product) {
        newQuantity = product["cart-item"].quantity;
        return fetchedCart.addProduct(product, {
          through: { quantity: newQuantity + 1 },
        });
      }
      return Product.findByPk(prodId)
        .then((product) => {
          return fetchedCart.addProduct(product, {
            through: { quantity: newQuantity },
          });
        })
        .catch((err) => console.log(err));
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => {
      console.log(err);
    });
};
// Product.findByPk(prodId, (product) => {
//   Cart.addProduct(prodId, product.price);
// });
// res.redirect("/cart");
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user.getCart().then((cart) => {
   cart.getProducts({where: { id: prodId}})
   .then((product) => {
    const cartItem = product[0]['cart-item'];
        if (cartItem) {
            return cartItem.destroy();
          } else {
            throw new Error('Cart item not found.');
          }
        })
   .then(() => {
    res.redirect("/cart");
   });
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
