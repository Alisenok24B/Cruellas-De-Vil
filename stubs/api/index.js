const { response } = require('express');

const router = require('express').Router();

const stubs = {
    "users": "success"
}

router.get("/users", (request, response) => {
    response.status(/error/i.test(stubs.users) ? 500 : 200).send(require(`../json/users/${stubs.users}.json`))
})

router.get("/dogsitter-viewing", (req, res) => {
    const { id } = req.query;
    console.log(`Получен запрос для dogsitter с ID: ${id}`);
    
    const usersFile = require(`../json/users/${stubs.users}.json`);
    const users = usersFile.data; // Извлекаем массив из свойства "data"
    
    const user = users.find((user) => user.id === Number(id));

    if (user) {
        res.json(user); // Возвращаем найденного пользователя
    } else {
        res.status(404).json({ error: "User not found" }); // Если пользователь не найден
    }
});

const fs = require('fs');
const path = require('path');


router.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
  
    console.log('Полученные данные для обновления:', updateData);

    const usersFilePath = path.resolve(__dirname, '../json/users/success.json');
  
    delete require.cache[require.resolve(usersFilePath)];
    const usersFile = require(usersFilePath);
    const users = usersFile.data;
  
    const userIndex = users.findIndex((user) => user.id === Number(id));
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    // Обновляем данные пользователя
    users[userIndex] = { ...users[userIndex], ...updateData };
  
    // Записываем изменения обратно в файл
    fs.writeFileSync(
      usersFilePath,
      JSON.stringify({ data: users }, null, 2),
      'utf8'
    );
  
    console.log('Обновлённые данные пользователя:', users[userIndex]);
  
    // Возвращаем обновлённого пользователя
    res.json(users[userIndex]);
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

const createEelemnt = (key, value, buttonTitle) => `
    <label>
        <input name="${key}" type="radio" ${stubs[key] === value && "checked"} onclick="fetch('/api/admin/set/${key}/${value}')"/>
        ${buttonTitle || value}
    </label>
`

router.get("/admin", (request, response) => {
    response.send(`
        <div>
            <fieldset>
                <legend>users</legend>
                ${createEelemnt('users', 'success')}
                ${createEelemnt('users', 'empty')}
                ${createEelemnt('users', 'error')}
            </fieldset>
        </div>    
    `)
})

router.get("/admin/set/:key/:value", (request, response) => {
    const { key, value } = request.params;
    stubs[key] = value;
    response.send("Okay")
})
