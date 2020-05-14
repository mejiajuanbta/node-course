const fs = require('fs');
const path = require('path');

const productsFile = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(productsFile, (err, fileContent)=> {
        let products = [];
        if(!err && fileContent.length){
            products = JSON.parse(fileContent);
        }
        return cb(products);
    });
}

module.exports = class Product {
    constructor(name){
        this.name = name;
    }

    save(){
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(productsFile, JSON.stringify(products), (err) => {
                if(err) {
                    console.log('Error writing products file: ', err);
                }
            });
        });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}