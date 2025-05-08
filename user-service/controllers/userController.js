exports.register = async (req, res) => {
  console.log('🔔 Register route hit');
  console.log('📥 Request body:', req.body);

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    console.log('❌ Missing fields:', { name, email, password });
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = new User({ name, email, password });
    await user.save();
    console.log('✅ User saved:', user);
    res.json({ token: generateToken(user._id) });
  } catch (err) {
    console.error('❌ Error saving user:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // hide passwords
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Invalid ID format or server error' });
  }
};
