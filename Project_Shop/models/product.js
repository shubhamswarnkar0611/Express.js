const fs = require("fs");
const path=require("path");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    // const p=path.join("../","data","product.json")
    fs.readFile("product.json", (err, fileData) => {
      let products = [];
      if(!err){
        products = JSON.parse(fileData);
      }
      products.push(this);

      fs.writeFile("product.json", JSON.stringify(products), (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        }
      });
    });
  }
 
  static fetchAll(cb) {
    // const p=path.join(path.dirname(process.mainModule.filename),"data","product.json")
    // try {
    //   const fileData = await fs.promises.readFile("Product.txt");
    //   const data = JSON.parse(fileData);
    //   console.log(data);
    //   return data;
    // } catch (err) {
    //   console.log(err.message);
    //   return [];
    // }
    fs.readFile("product.json", (err, fileData) => {
      
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileData));
      }
    });
  }
};
