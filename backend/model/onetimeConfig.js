const mongoose = require('mongoose');
const { ObjectID, ObjectId } = require('mongodb');
const Scheme = mongoose.Schema;

const one_timeConfig = new Scheme({


    // first declarations for grading initialization
    userID: {
        type: ObjectId,
        required: true,
        unique: true,
        trim: false,
        minlength: 2
    },
    A_plus: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    A: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    }, 
    A_minus: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    B_plus: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    B: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    B_minus: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    C_plus: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    C: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    C_minus: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    D_plus: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    D: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    I: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    F: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
// below declarations for classes initialization/configuration according to GPA value
    class_F_min: {   // F = first class
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    class_SU_min: {  // SU = second upper
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    class_SU_max: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    class_SL_min: {  // SL = second lower
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    class_SL_max: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    class_pass_min: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    class_pass_max: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    }
});

module.exports = mongoose.model('onetimeConfigs', one_timeConfig);