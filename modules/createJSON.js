const fs = require('fs');

module.exports = (product, name) => {
    return new Promise(resolve => {
        const data = JSON.stringify(product)
        fs.writeFile(name+ ".json", data, (err) => {
            if (err) {
                throw err;
            }
            resolve(true)
        });
    })
}