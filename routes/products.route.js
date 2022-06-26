const { Router } = require("express");
const { productController } = require("../controllers/products.controller.js");
const router = Router();

// Добавление продукта
router.post("/admin/product", productController.postProduct);

//Изменение продукта
router.patch("/admin/product/:id", productController.patchProduct);

//Удаление продукта
router.delete("/admin/product/:id", productController.deleteProduct);

//Вывод всех продуктов
router.get("/user/product", productController.getProduct);

//Вывод продукта по id
router.get("/user/product/:id", productController.getProduct);

//Вывод продуктов по категории
router.get("/user/product/category/:id", productController.getProduct);

//Вывод продуктов по бренду
router.get("/user/product/brand/:id", productController.getProduct);

module.exports = router;
