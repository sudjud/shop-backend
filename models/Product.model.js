const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  nameProduct: String,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  brand: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Brand",
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
