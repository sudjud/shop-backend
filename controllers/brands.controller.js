const Brand = require("../models/Brand.model");



module.exports.brandsController = {
    postBrand: async (req, res) => {
        await Brand.create(
            {
            name: req.body.name,
            })
            res.json("бренд добавлен");
        },
    
    getBrand: async (req, res) => {
        const data = await Brand.find({});
        res.json(data);
    },

    patchBrand: async (req, res) => {
        await Brands.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
          })
          res.json("Бренд изменен");
    },

    deleteBrand: async(req, res) => {
        await Brand.findByIdAndRemove(req.params.id)
        res.json("Бренд удален")
    },




    getBrandById: async (req, res) => {
        const news = await Brand.findById(req.params.id); 
        res.json(news)
    },

}