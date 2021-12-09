'use strict';

const express = require('express');
const { urlencoded } = require('express');
var urlencodedParser = urlencoded({ extended: false })
const router = express.Router();
const uuid = require('uuid');

router.get('/makeOrder', 
    async function(req, res) {
        res.render('create-order', {
            title: 'About page',
            siteName: 'star'
        })
    }
);

router.post('/orderDetails', urlencodedParser,
    async function(req, res) {
        console.log(req.data);
        req.body.status = 'On Picking';
        req.body.sum = req.body.packs * 15500;
        req.body.weight = req.body.packs * 5;
        req.body.client = {name: "Bekzat", surname: "Tolegenov", email:"bekzat@gmail.com", phone: "+77077077777", address: "Tole bi 59", creditCard: {PAN:"4*8889"}}
        const yourDate = new Date()
        req.body.createdAt = yourDate.toISOString().split('T')[0]
        req.body.ID = Math.floor(Math.random() * 20); 
        console.log(req.body)
        res.render( 'order-details',{title: 'Order Details', siteName: 'Order Details', data: req.body})
}
);
router.get('/orderDetails', urlencodedParser,
    async function(req, res) {
        const order = {
            "coffee": "Colombian",
            "packs": "10",
            "deliveryDate": "2021-10-18",
            "status": "On Picking",
            "sum": 155000,
            "weight": 50,
            "client": {
              "name": "Bekzat",
              "surname": "Tolegenov",
              "email": "bekzat@gmail.com",
              "phone": "+77077077777",
              "address": "Tole bi 59",
              "creditCard": { "PAN": "4*8889" }
            },
            "createdAt": "2021-11-18",
            "ID": "7"
          }
        console.log(req.body)
        res.render( 'order-details',{title: 'Order Details', siteName: 'Order Details', data: order})
}
);

module.exports = router;
