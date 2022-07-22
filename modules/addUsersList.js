let users = [];


function addUser(req, res){
    users.push(req.body);
    res.send({users:users})
}
module.exports = {
    users,
    addUser
}