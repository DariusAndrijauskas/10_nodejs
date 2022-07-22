const express = require('express');
const app = express();
const router = require('./router/mainRouter');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(4000);
console.log('server started on port 4000');