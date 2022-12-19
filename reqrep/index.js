console.clear();
let cards = [
    {
        id: 1,
        name: 'wending-machine',
        value:'500'
    },

    {
        id: 2,
        name: 'airpod',
        value:'100'
    },
    {
        id: 3,
        name: 'car'
    ,value:'100000'
    },

];
const PORT = 3000;
const express = require('express');
const res = require('express/lib/response');
const app = express();

const data = require('./output.json')

app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})

app.get('/card', (req, res) => {
    const count= parseInt(req.query.count) || 10;
    const offSet = parseInt(req.query.offSet)|| 0;
     res.json(data.slicecards);
})

app.get('/card/:id', (req, res) => {
    const id = req.params.id;
    const card = cards.find(c => c.id === +id)
    if (!card) {
        res.status(404).send();
      }
      
        res.status(200).json(card);
      
     
    res.json(card);
})

app.listen(PORT, () => {
    console.log(`Your application started on ${PORT}.`)
})                                  