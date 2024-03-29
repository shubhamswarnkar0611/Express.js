// const db = require('../util/database')

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute('INSERT INTO products (title, imageurl, description, price) VALUES (?, ?, ?,?)',
//     [this.title, this.imageUrl, this.description, this.price]);
//   }

//    update(id){
//     return db.execute('UPDATE products SET title=?,imageurl=?,description=?,price=?  WHERE id = ? ',
//     [this.title, this.imageUrl, this.description, this.price , id])
//   }
  

//   static fetchAll() {
//   return db.execute("SELECT * FROM products");
//   }

//   static findById(id) {
//     return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);   
//   }

//   static deleteProduct(id) {
//     return db.execute("DELETE FROM products WHERE products.id = ?", [id]);
//   }
// };


const Sequelize = require("sequelize");
const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageUrl: { // Corrected attribute name from imageURl to imageUrl
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Product;