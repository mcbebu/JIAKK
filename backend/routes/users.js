var express = require("express");
var router = express.Router();
var {
  getUser,
  addUser,
} = require("../utils/database");

router.post("/login", async function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    const response = await getUser(email, password);

    if (response.length === 1) {
        res.send({ status: 200, message: "Login Successful" });
    } else {
        res.send({ status: 404, message: "Invalid user" });
    }
});

router.post("/create", async function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    const response = await addUser(email, password);

    console.log(response);

    if (response.status === 200) {
        res.send({ status: 200, message: "User created" });
    } else {
        res.send({ status: 404, message: "Error occurred when creating user" });
    }
})

module.exports = router;