const Brand = require("../models/Brand.model");



module.exports.brandsController = {
  postBrand: async (req, res) => {
    try {
      await Brand.create({
        name: req.body.name,
      })
      res.json("бренд добавлен");
    } catch (e) {
      res.json(e); 
    }
  },

  getBrand: async (req, res) => {
    try {
      const data = await Brand.find({});
      res.json(data);
    } catch (e) {
      res.json(e);
    }
    
  },

  patchBrand: async (req, res) => {
    try {
      await Brands.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      })
      res.json("Бренд изменен");
    } catch (e) {
      res.json(e); 
    }
  },

  deleteBrand: async (req, res) => {
    try {
      await Brand.findByIdAndRemove(req.params.id)
      res.json("Бренд удален")
    } catch (e) {
      res.json(e);
    }
  },

  getBrandById: async (req, res) => {
    try {
      const news = await Brand.findById(req.params.id);
      res.json(news)
    } catch (error) {
      res.json(e);
    }
  },
}