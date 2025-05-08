const express = require('express');
const router = express.Router();
const { register, login, profile, getAllUsers, getUserById } = require('../controllers/userController');
const auth = require('../middleware/auth');

// ✅ Order matters: define '/' before '/:id'
router.get('/', getAllUsers);            // GET /api/users
router.get('/:id', getUserById);         // GET /api/users/:id

router.post('/register', register);      // POST /api/users/register
router.post('/login', login);            // POST /api/users/login
router.get('/profile', auth, profile);   // GET /api/users/profile

module.exports = router;
