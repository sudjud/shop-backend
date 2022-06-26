const { Router } = require("express");
const {
  categoryController,
} = require("../controllers/categories.controller.js");
const router = Router();

// Вывод всех категорий
router.get("/user/category", categoryController.getCategory);

//Вывод категории по id
router.get("/user/category/:id", categoryController.getCategoryId);

//Добавление категория
router.post("/admin/category", categoryController.postCategory);

//Удаление категории
router.delete("/admin/category/:id", categoryController.deleteCategory);

//Изменение категории
router.patch("/admin/category/:id", categoryController.patchCategory);

module.exports = router;
