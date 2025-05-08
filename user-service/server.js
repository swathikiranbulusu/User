const express = require('express');
const connectDB = require('./config/db'); // MongoDB connection
const userRoutes = require('./routes/userRoutes'); // Your API routes

const app = express();
connectDB(); // connect to MongoDB
app.use(express.json()); // parse JSON

// Root route
app.get('/', (req, res) => res.send('User Service is running'));
console.log('✅ Mounting /api/users route');
// Register routes
app.use('/api/users', userRoutes); // <-- this enables /register, /login, etc.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
