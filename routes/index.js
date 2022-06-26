const { Router } = require('express');

const router = Router();

router.use(require('./user.route.js'));
router.use(require('./categories.route.js'));
router.use(require('./brands.route.js'));
router.use(require('./products.route.js'))

module.exports = router;
