const { response } = require('express');

const router = require('express').Router();

router.get("/users", (request, response) => {
    response.send(require("../json/users.json"))
})

router.post("/auth", (request, response) => {
    const {phoneNumber, password} = request.body;
    console.log(phoneNumber, password);
    if (phoneNumber === '89999999999') {
        response.send(require("../json/auth/dogsitter.success.json"))
    }
    else if (phoneNumber === '89555555555') {
        response.status(400).send(require("../json/auth/error.json"))
    }
    else {
        response.send(require("../json/auth/owner.success.json"))
    }
})

router.post("/register", (request, response) => {
    const {firstName, secondName, phoneNumber, password, role} = request.body;
    console.log(phoneNumber, password, role);
    if (phoneNumber === '89283244141' || phoneNumber === '89872855893') {
        response.status(400).send(require("../json/register/error.json"))
    }
    else if (role === 'dogsitter') {
        response.send(require("../json/register/dogsitter.success.json"))
    }
    else {
        response.send(require("../json/register/owner.success.json"))
    }
})

module.exports = router;
