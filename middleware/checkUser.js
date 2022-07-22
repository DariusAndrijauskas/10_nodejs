const { users } = require('../modules/addUsersList');

module.exports = {
    checkUser: (req, res, next)=>{
        if (req.body.username.length > 30) return res.send({error: 'username too long', users:users});
        if (users.filter(x=>x.username===req.body.username).length) return res.send({error: 'username taken', users:users});
        if (!(req.body.gender==='male' || req.body.gender==='female')) return res.send({error: 'theres only two genders', users});
        if (users.length >= 10) return res.send({error: 'no more space', users:users});
        next();
    }
}