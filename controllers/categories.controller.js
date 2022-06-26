const Category = require("../models/Category.model.js");
module.exports.categoryController = {
  getCategory: async (req, res) => {
    try {
      res.json(await Category.find());
    } catch (error) {
      res.json(error.toString());
    }
  },
  getCategoryId: async (req, res) => {
    try {
      res.json(await Category.findById(req.params.id));
    } catch (error) {
      res.json(error.toString());
    }
  },
  postCategory: async (req, res) => {
    try {
      const data = await Category.create({
        nameCategory: req.body.nameCategory,
      });
      res.json(`Категория ${req.body.nameCategory} добавлена!`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  patchCategory: async (req, res) => {
    try {
      const data = await Category.findByIdAndUpdate(req.params.id, {
        nameCategory: req.body.nameCategory,
      });
      res.json(`Категория ${req.body.nameCategory} изменена!`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json("Категория удалена!");
    } catch (error) {
      res.json(error.toString());
    }
  },
};
