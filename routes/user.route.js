const { Router } = require('express');
const router = Router();
const { userController } = require('../controllers/users.controller')

// Создать пользователя
router.post('/user', userController.userCreate)

// Изменить пользователя
router.patch('/user/:id', userController.userUpdate)

// Посмотреть пользователя
router.get('/user/:id', userController.getUser)

// Удалить пользователя
router.delete('/user/:id', userController.userDelete);

// Добавить отзыв
router.patch('/user/:id/review/:productId', userController.postReview);

// Посмотреть отзывы продукта
router.get('/review/product/:productId', userController.getReviews);

// Удалить отзыв
router.patch('/admin/review/:reviewId', userController.deleteReview)

// Добавить товар в корзину
router.patch('/user/:id/product/:productId/add-to-cart', userController.addProdToCart);

// Удалить товар из корзины
router.patch('/user/:id/product/:productId/remove-from-cart', userController.removeProdFromCart);



module.exports = router;