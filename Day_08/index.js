const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const checkAdmin = (req, res, next) => {
    if (req.query.admin == 'true') {
        console.log("in first");
        res.send("Welcome to the admin page");
        next();
    } else {
        res.status(200).send("You are not authorized to view this page");
    }
}

const sendResponse = (req, res) => {
    res.status(200)
    res.json(req.query)
    }
    
// app.get('/', checkAdmin, sendResponse);
// app.get('/', (req, res, next) => {
//     if (req.query.admin == 'true') {
//         console.log("in first");
//         res.send("Welcome to the admin page");
//         next();
//     } else {
//         res.status(200).send("You are not authorized to view this page");
//     }
// }, (req, res) => {
//     res.status(200)
//     res.json(req.query)
//     })

// app.use(checkAdmin);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get('/ab?cd', (req, res) => {
//     res.send('ab?cd');
//     });

app.get('/', sendResponse);

app.post('/', (req, res) => {
    console.log('req.body-->', req.body);
    res.json({text: req.body});
});

app.listen(5000);