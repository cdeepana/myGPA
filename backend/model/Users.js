const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const UserModelSchema = new Scheme({

    username: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength:5
    }

});

module.exports = mongoose.model('users', UserModelSchema);