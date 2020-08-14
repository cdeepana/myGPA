const mongoose = require('mongoose');
const { ObjectID, ObjectId } = require('mongodb');
const Scheme = mongoose.Schema;

const semesterModel = new Scheme({



    // first declarations for grading initialization
    userID: {
        type: ObjectId,
        required: true,
        // unique: true,
        trim: false,
        minlength: 2
    },
    yearOfSem: {
        type: Number,
        required: true,
        unique: false,
        trim: false,
        maxlength:1
    },
    numberOfSem: {
        type: Number,
        required: true,
        unique: false,
        trim: false
    },
    semInfo:{
        type: Array,
        required: false,
        unique: false,
        trim: true,
    }
    
});

module.exports = mongoose.model('semester', semesterModel);