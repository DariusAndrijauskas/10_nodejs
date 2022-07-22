// const { countLength, logFirst, logLast } = require(`./modules/mod.js`);
// let text = 'labas';
// console.log(text);
// countLength(text);
// logFirst(text);
// logLast(text);

// const validator = require("email-validator");
// console.log(validator.validate("testemail.com"));

// const { generateUsers } = require('./modules/users');
// console.log(generateUsers(50));
const createJSON = require ('./modules/createJSON');
const { getItemsByCategory } = require('aliexpress-scraper');

async function some(){
    const items = await getItemsByCategory({
        category: 'kitchen-dining-bar',
        page: 1,
        minPrice: 1,
        maxPrice: 2000,
    });
    output = items.map((item, i)=> {
        return {
            title: item.title.seoTitle,
            imageUrl: item.image.imgUrl,
            storeName: item.store.storeName,
            productID: item.productId,
            price: item.prices.salePrice.minPrice,
        } 
    });
    console.log(output);
    // createJSON(items, 'items');
}
some();