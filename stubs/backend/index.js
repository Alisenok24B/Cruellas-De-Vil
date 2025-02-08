const router = require("express").Router();

router.get("/users", (request, response) => {
  response.send(require("./json/users/users.json"));
});

router.post("/auth", (request, response) => {
  const { phoneNumber, password } = request.body;
  console.log(phoneNumber, password);
  if (phoneNumber === "89999999999" || phoneNumber === "89559999999") {
    response.send(require("../json/auth/success.json"));
  } else {
    response.status(401).send(require("../json/auth/error.json"));
  }
});

router.post("/auth/2fa", (request, response) => {
  const { phoneNumber, code } = request.body;
  if (code === "0000" && phoneNumber === "89999999999") {
    response.send(require("../json/2fa/dogsitter.success.json"));
  } else if (code === "0000" && phoneNumber === "89559999999") {
    response.send(require("../json/2fa/owner.success.json"));
  } else {
    response.status(401).send(require("../json/2fa/error.json"));
  }
});

router.post("/register", (request, response) => {
  const { firstName, secondName, phoneNumber, password, role } = request.body;
  console.log(phoneNumber, password, role);
  if (phoneNumber === "89999999999" || phoneNumber === "89559999999") {
    response.status(401).send(require("../json/register/error.json"));
  } else if (role === "dogsitter") {
    response.send(require("../json/register/dogsitter.success.json"));
  } else {
    response.send(require("../json/register/owner.success.json"));
  }
});

router.get("/auth/session", (request, response) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: "Authorization header missing" });
  }

  // Берём сам токен из заголовка
  const token = authHeader.split(" ")[1];

  if (!token) {
    return response.status(401).json({ error: "Bearer token missing" });
  }

  const jwt = require("jsonwebtoken");
  const secretKey = "secret";

  try {
    const decoded = jwt.verify(token, secretKey);

    if (decoded.role === "dogsitter") {
      response.send(require("../json/role/dogsitter.success.json"));
    } else {
      response.send(require("../json/role/owner.success.json"));
    }
  } catch (e) {
    console.log("token e:", e);
    return response.status(403).json({ error: "Invalid token" });
  }
});