const express = require('express');
const router = express.Router();
const { register, login, profile } = require('../controllers/userController');
const auth = require('../middleware/auth');

router.post('/register', register);      // POST /api/users/register
router.post('/login', login);            // POST /api/users/login
router.get('/profile', auth, profile);   // GET /api/users/profile

module.exports = router;
