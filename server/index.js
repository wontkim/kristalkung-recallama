const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../public/dist'));

app.use('/api/signup', (req, res) => {
    console.log(req.body);
    res.status(200).json('Sign up was successful');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
