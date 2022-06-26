const { Router } = require("express");

const { brandsController } = require("../controllers/brands.controller");

const router = Router();

router.post("/admin/brand", brandsController.postBrand);

router.patch("/admin/brand/:id", brandsController.patchBrand);

router.delete("/admin/brand/:id", brandsController.deleteBrand);

router.get("user/brand/:id", brandsController.getBrandById);


module.exports = router;


