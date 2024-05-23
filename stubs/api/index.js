const { response } = require('express');

const router = require('express').Router();

router.get("/users", (request, response) => {
    response.send(require("../../src/__stubs__/users.json"))
})

module.exports = router;
