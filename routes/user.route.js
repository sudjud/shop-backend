const { Router } = require('express');
const router = Router();
const { userController } = require('../controllers/users.controller')

router.post('/user', userController.userCreate)  // Создать пользователя
router.patch('/user/:id', userController.userUpdate) // Изменить пользователя
router.get('/user/:id', userController.getUser) // Посмотреть пользователя
router.delete('/user/:id', userController.userDelete);

module.exports = router;