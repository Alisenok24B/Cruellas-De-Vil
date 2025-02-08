const { Router } = require('express')
const { expressjwt } = require('express-jwt')

const { getAnswer } = require('../../utils/common')
const { User, Interaction } = require('./model')
const { TOKEN_KEY } = require('./const')
const { requiredValidate } = require('./utils')

const router = Router()

// Получение списка пользователей
router.get('/users', async (req, res) => {

  const users = await User.find()
    .select('-__v -ratings -phone_number')
    .lean()
  
  console.log('get users successfull')

  res.send(getAnswer(null, users))
})

// Получение конкретного пользователя
router.get('/dogsitter-viewing', async (req, res) => {
  const { userId } = req.params

  const user = await User.findById(userId)
    .select('-__v -ratings')
    .lean()

  if (!user) {
    return res.status(404).send(getAnswer(new Error('Пользователь не найден')))
  }

  res.send(getAnswer(null, user))
})

router.use(expressjwt({ secret: TOKEN_KEY, algorithms: ['HS256'] }))

// Добавление оценки пользователю
router.post('/dogsitter-viewing/rating', requiredValidate('value'), async (req, res) => {
  const { userId } = req.params
  const { value } = req.body
  const authUserId = req.auth.id

  try {
    const user = await User.findById(userId)
    if (!user) throw new Error('Пользователь не найден')
    if (user.role !== 'dogsitter') throw new Error('Нельзя оценивать этого пользователя')
    if (user.id === authUserId) throw new Error('Нельзя оценивать самого себя')

    user.ratings.push(Number(value))
    user.rating = user.ratings.reduce((a, b) => a + b, 0) / user.ratings.length

    const updatedUser = await user.save()
    
    res.send(getAnswer(null, {
      id: updatedUser.id,
      rating: updatedUser.rating.toFixed(1),
      totalRatings: updatedUser.ratings.length
    }))

  } catch (error) {
    res.status(400).send(getAnswer(error))
  }
})

// Обновление информации пользователя
router.patch('/users', async (req, res) => {
  const { userId } = req.params
  const updates = req.body

  try {
    const user = await User.findByIdAndUpdate(userId, updates, { new: true })
      .select('-__v -ratings')
    
    if (!user) throw new Error('Пользователь не найден')
    res.send(getAnswer(null, user))

  } catch (error) {
    res.status(400).send(getAnswer(error))
  }
})

// Создание объекта взаимодействия
router.post('/interactions', 
  expressjwt({ secret: TOKEN_KEY, algorithms: ['HS256'] }),
  requiredValidate('dogsitter_id'),
  async (req, res) => {
    try {
      const { dogsitter_id } = req.body
      const owner_id = req.auth.id // ID из JWT токена

      // Проверка существования пользователей
      const [owner, dogsitter] = await Promise.all([
        User.findById(owner_id),
        User.findById(dogsitter_id)
      ])

      if (!owner || owner.role !== 'owner') {
        throw new Error('Владелец не найден или имеет неверную роль')
      }

      if (!dogsitter || dogsitter.role !== 'dogsitter') {
        throw new Error('Догситтер не найден или имеет неверную роль')
      }

      // Создание взаимодействия
      const interaction = await Interaction.create({
        owner_id,
        dogsitter_id
      })

      res.send(getAnswer(null, {
        id: interaction.id,
        timestamp: interaction.timestamp
      }))

    } catch (error) {
      res.status(400).send(getAnswer(error))
    }
  }
)

router.get('/interactions/check', async (req, res) => {
  const { owner_id, dogsitter_id } = req.query;

  if (!owner_id || !dogsitter_id) {
    return res.status(400).send(getAnswer('Missing owner_id or dogsitter_id'));
  }

  try {
    // Поиск взаимодействий по owner_id и dogsitter_id
    const interactions = await Interaction.find({ owner_id, dogsitter_id })
      .select('-__v') // Выбираем только нужные поля
      .lean();

    if (interactions.length === 0) {
      return res.status(404).send(getAnswer('No interactions found'));
    }

    res.send(getAnswer(null, interactions));
  } catch (error) {
    console.error('Error checking interactions:', error);
    res.status(500).send(getAnswer('Internal Server Error'));
  }
});

module.exports = router