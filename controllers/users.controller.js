const User = require('../models/User.model');

module.exports.userController = {
  userCreate: async (req, res) => {
    try {
      res.json(`Добавлен пользователь ${(await User.create({
        name: req.body.name,
      })).name}`)
    } catch (e) {
      res.json(e);
    }
  },
  userUpdate: async (req, res) => {
    try {
      res.json(`Изменен пользователь ${(await User.findByIdAndUpdate(req.params.id, {...req.body})).name}`)
    } catch (e) {
      res.json(e);
    }
  },
  userDelete: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json('Пользователь удален')
    } catch (e) {
      res.json(e)
    }
  },
  getUser: async (req, res) => {
    try {
      res.json(await User.findById(req.params.id))
    } catch (e) {
      res.json(e);
    }
  },
  postReview: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: {
          reviews: {
            text: req.body.text,
            product: req.params.productId
          }
        }
      })
      res.json('Отзыв добавлен')
    } catch (e) {
      res.json(e);
    }
  },
  getReviews: async (req, res) => {
    try {
      res.json(await User.find({
        'reviews.product': req.params.productId
      }).select('name reviews.text -_id'));
    } catch (e) {
      res.json(e);
    }
  },
  deleteReview: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $pull: {
          reviews: {
            _id: req.params.reviewId
          }
        }
      })
      res.json('Отзыв удален')
    } catch (e) {
      res.json(e);
    }
  },
  addProdToCart: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: {
          'cart.products': req.params.productId
        }
      })
      res.json('Товар добавлен в корзину')
    } catch (e) {
      
    }
  },
  removeProdFromCart: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $pull: {
          'cart.products': req.params.productId
        }
      })
      res.json('Товар удален из корзины')
    } catch (e) {
      res.json(e);
    }
  }
}