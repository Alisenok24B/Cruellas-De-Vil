const { response } = require('express');

const router = require('express').Router();

router.get("/users", (request, response) => {
    response.send(require("../json/users.json"))
})

module.exports = router;
