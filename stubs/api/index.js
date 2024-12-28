const { response } = require('express');

const router = require('express').Router();

router.get("/users", (request, response) => {
    response.send(require("../json/users.json"))
})

router.get("/dogsitter-viewing", (req, res) => {
    const { id } = req.query;
    console.log(`Получен запрос для dogsitter с ID: ${id}`);
    const users = require("../json/users.json");
    const user = users.find((user) => user.id === Number(id));

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});




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

router.post("/auth/2fa", (request, response) => {
  const { code } = request.body;
  if (code === "0000") {
    response.send(require("../json/2fa/success.json"));
  } else {
    response.status(400).send(require("../json/2fa/error.json"));
  }
});

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
