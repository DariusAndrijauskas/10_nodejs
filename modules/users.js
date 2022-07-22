const randomAnimalName = require('random-animal-name');
const shortid = require('shortid');
const colors = require('./colors.json');
function randomNr(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min
}

function generateUsers(nr) {
    let users = []
    for (let i = 0; i < nr; i++) {
        users.push({
            username: randomAnimalName(),
            id: shortid(),
            color: colors[randomNr(0, colors.length-1)],
            yearsOld: randomNr(0, 100),
            gender: randomNr(0, 1) ? "male" : "female",
            tall: randomNr(100, 200),
        });
        
    }
    return users;
}
module.exports = {
    generateUsers,
}