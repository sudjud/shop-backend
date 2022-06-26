const { Router } = require('express');

const router = Router();

router.use('./user.route.js');
router.use('./categories.route.js');
router.use('./brands.route.js');
router.use('./products.route.js')

module.exports = router;
