const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true, //Solo acepta un espacion entre letras
            unique: true //Solo acepta un usuario
        }
}, {
    timestamps: true
});

module.exports = model('User', userSchema);
