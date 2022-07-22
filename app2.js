const express = require('express');
const app = express();
const shortid = require('shortid');

let allUsers = [];

app.listen(3000, ()=>console.log('port 3000 live'));
app.get('/userinfo/:username', (req, res) => {
    const {username} = req.params;
    const user = {
        username,
        id: shortid(),
    };
    allUsers.push(user);
    res.send({message: "all is good, all is work"});
});
app.get('/allusers', (req, res)=>{
    res.send(allUsers);
});
app.get('/user/:id', (req, res)=>{
    const {id} = req.params;
    res.send(allUsers.filter(user=>user.id===Number(id)));
})
app.get('/register/:username/:pass1/:pass2', (req, res)=>{
    const {username, pass1, pass2} = req.params;
    let error = '';
    if (username.length < 3) error = 'username is too short';
    if (username.length > 20) error = 'username is too loong';
    if (pass1!==pass2) error = 'passwords dont match';
    if (allUsers.filter(user=>user.username===username).length) error = 'username is taken';
    if (error) {
        res.send({error})
    } else {
        allUsers.push({
            username,
            password: pass1,
            id:shortid(),
        });
        res.send({status: 200})
    }
    console.log(username, pass1, pass2);
});

app.get('/login/:username/:password', (req, res)=>{
    const { username, password } = req.params;
    let check = allUsers.filter(user=>user.username===username && user.password===password);
    if (check.length) res.send(check[0]);
    else res.send({error: 'user not found'});
});

app.get('/update/:newUserName/:id', (req, res)=>{
    const { newUserName, id } = req.params;
    if (!allUsers.find(x=>x.id===id)) return res.send('wrong user id');
    if (!allUsers.find(user=>user.username===newUserName)) {
        allUsers = allUsers.map(user=>user.id===id ? {...user, username:newUserName} : user);
        res.send({status: 200});
    } else res.send({error: 'username already taken'})
});
let posts = [];
app.get('/post/:title/:location/:id', (req, res)=>{
    const { title, location, id } = req.params;
    if (allUsers.find(x=>x.id===id)){
        posts.push({
            title: title,
            location: location,
            postID: shortid()
        })
        res.send(posts);
    } else res.send({error:'no such user found'});
});
app.get('/delete/:postID', (req, res)=> {
    const { postID } = req.params;
    posts = posts.filter(x=>x.postID!==postID);
    res.send(posts);
})