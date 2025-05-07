const express = require('express');
const router = express.Router();
const { register, login, profile } = require('../controllers/userController');
const auth = require('../middleware/auth');
const { getAllUsers } = require('../controllers/userController');

router.get('/', getAllUsers); // GET /api/users
router.post('/register', register); // ✅ this defines /api/users/register
router.post('/login', login);
router.get('/profile', auth, profile);

module.exports = router;
