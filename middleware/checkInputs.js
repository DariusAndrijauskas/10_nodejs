const checkInputs = (req, res, next)=>{
    console.log(req.body);
    let locations = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Trakai'];
    if (!req.body.image.includes('http')) return res.send({error:'bad url'});
    if (req.body.title.length < 10 || 100 < req.body.title.length) return res.send({error: 'bad title length'});
    if (req.body.username[0]===req.body.username.toLowerCase()) return res.send({error: 'capitalise the first letter'});
    if (req.body.username.length < 3 || 30 < req.body.username.length) return res.send({error: 'bad username length'});
    if (!locations.includes(req.body.location)) return res.send({error:'bad location'});
    if (!Number(req.body.age)) return res.send({error: 'age must be a number'});
    if (Number(req.body.age)>50) return res.send({error: 'you are too old'});
    console.log(Number(req.body.age));
    next();
}
module.exports = {
    checkInputs,
}