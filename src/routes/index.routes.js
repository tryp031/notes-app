const { Router } = require('express');
const router = Router();

const { renderIndex, renderAboout } = require('../controllers/index.controller');

router.get('/', renderIndex);

router.get('/about', renderAboout);

module.exports = router;