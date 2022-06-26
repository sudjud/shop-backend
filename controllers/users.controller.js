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
  }
}