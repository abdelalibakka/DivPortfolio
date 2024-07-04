// controllers/profileController.js
const getProfile = (req, res) => {
    res.send('Get Profile');
};

const createProfile = (req, res) => {
    res.send('Create Profile');
};

module.exports = {
    getProfile,
    createProfile,
};

