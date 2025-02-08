const { Router } = require("express");
const hash = require("pbkdf2-password")();
const { promisify } = require("node:util");
const jwt = require('jsonwebtoken')

const { getAnswer } = require("../../utils/common");

const { AuthModel } = require("./model/todo/auth");
const { TOKEN_KEY } = require('./const')
const { UserModel } = require("./model/todo/user");

const { requiredValidate } = require('./utils')

const router = Router();

router.post(
  "/signup",
  requiredValidate("login", "password", "email"),
  async (req, res, next) => {
    const { login, password, email } = req.body

    const user = await AuthModel.findOne({ login });

    if (user) {
      throw new Error("Пользователь с таким логином уже существует");
    }

    hash({ password }, async function (err, pass, salt, hash) {
      if (err) return next(err);

      const user = await UserModel.create({ login, email });
      await AuthModel.create({ login, hash, salt, userId: user.id });

      res.json(getAnswer(null, { ok: true }))
    })
  }
)

function authenticate(login, pass, cb) {
    AuthModel.findOne({ login }).populate('userId').exec().then((user) => {
    if (!user) return cb(null, null)

    hash({ password: pass, salt: user.salt }, function (err, pass, salt, hash) {
      if (err) return cb(err)
      if (hash === user.hash) return cb(null, user)
      cb(null, null)
    })
  })
}

const auth = promisify(authenticate)

router.post('/signin', requiredValidate('login', 'password'), async (req, res) => {
    const { login, password } = req.body

    const user = await auth(login, password)

    if (!user) {
        throw new Error("Неверный логин или пароль")
    }

    const accessToken = jwt.sign({
        ...JSON.parse(JSON.stringify(user.userId)),
    }, TOKEN_KEY, {
        expiresIn: '12h'
    })

    res.json(getAnswer(null, {
        user: user.userId,
        token: accessToken,
    }))
})

module.exports = router
