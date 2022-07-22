const validator = require('email-validator');
function randomNr(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min
}
let users = [{
    email: 'jonas@gmail.com',
    password: 'jonas',
    id: 321654687
}]
module.exports = {
    randomControler: (req, res)=>{
        console.log('random number sent');
        res.send({rng: Math.random()});
    },
    getCar: (req, res)=>{
        console.log('request received');
        let carModels = ['Mersedes-Benz', 'Audi', 'Bmw', 'Honda'];
        let carColors = ['white', 'black', 'red', 'green', 'blue', 'yellow'];
        let gearBoxz = ['manual', 'automatic'];
        
        let car = {
            carModel: carModels[randomNr(0, carModels.length-1)],
            carColor: carColors[randomNr(0, carColors.length-1)],
            year: randomNr(1950, 2022),
            gasolineConsuption: randomNr(3, 20),
            doorsAmount: randomNr(2, 5),
            gearBox: gearBoxz[randomNr(0, 1)],
            millage: randomNr(0, 999999)
        }
        res.send(car);
    },
    postInfo: (req, res)=>{
        console.log(req.body);
        res.send({status:200});
    },
    register: (req, res)=>{
        if (validator.validate(req.body.email) && 
            req.body.pass1===req.body.pass2 &&
            !users.find(x=>x.email===req.body.email)) {
                users.push({
                    email:req.body.email,
                    password: req.body.pass1,
                    id: Date.now()
                })
                res.send({status:200});
            } else res.send({error: true})
        console.log(users);
    },
    login: (req, res)=>{
        if (users.find(x=>x.email===req.body.email && x.password===req.body.pass)) {
            res.send({
                loginStatus: true,
                user: users.filter(x=>x.email===req.body.email)[0]
            })
        } else res.send({error:true});
        console.log(req.body);
    },
    sendObject: (req, res)=>{
        console.log('doing it');
        res.send(req.body);
    },
    getUsers: (req, res)=>{
        console.log('getUsers working');
        res.send(req.body);
    }
    
}