
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email,
    phone: req.user.phone,
    address: req.user.address
  });
});

router.put('/profile', authMiddleware, authController.updateUserProfile);

module.exports = router;

