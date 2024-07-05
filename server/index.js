require('dotenv').config();
console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);
console.log('Environment variables:', process.env);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5006;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const profileRoutes = require('./routes/profileRoutes');
app.use('/api/profiles', profileRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser and useUnifiedTopology are not required in the latest versions
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

