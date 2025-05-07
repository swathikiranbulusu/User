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
