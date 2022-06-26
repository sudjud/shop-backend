const { Router } = require('express');

const router = Router();

router.use('./user.route.js');
router.use('./categories.route.js');
router.use('./brands.route.js');

module.exports = router;
