const Product = require("../models/Product.model.js");
module.exports.productController = {
  getProduct: async (req, res) => {
    try {
      res.json(await Product.find().populate("category brand"));
    } catch (error) {
      res.json(error.toString());
    }
  },
  getProductId: async (req, res) => {
    try {
      res.json(
        await Product.findById(req.params.id).populate("category brand")
      );
    } catch (error) {
      res.json(error.toString());
    }
  },
  getProductCategory: async (req, res) => {
    try {
      res.json(
        await Product.find({ category: req.params.id }).populate(
          "category brand"
        )
      );
    } catch (error) {
      res.json(error.toString());
    }
  },
  getProductBrand: async (req, res) => {
    try {
      res.json(
        await Product.find({ brand: req.params.id }).populate("category brand")
      );
    } catch (error) {
      res.json(error.toString());
    }
  },
  postProduct: async (req, res) => {
    try {
      const { nameProduct, category, brand } = req.body;
      const data = await Product.create({
        nameProduct,
        category,
        brand,
      });
      res.json(`Продукт ${data.nameProduct} добавлен!`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  patchProduct: async (req, res) => {
    try {
      const { nameProduct, category, brand } = req.body;
      const { id } = req.params;
      const data = await Product.findByIdAndUpdate(id, {
        nameProduct,
        category,
        brand,
      });
      res.json(`Продукт ${data.nameProduct} изменен!`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndRemove(req.params.id);
      res.json("Продукт удален!");
    } catch (error) {
      res.json(error.toString());
    }
  },
};
