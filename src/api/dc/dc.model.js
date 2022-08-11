const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(

{
    nameDC: {type: String, unique: true, required: true},
    emojiDC: {type: String, unique: true},
    imagesDC: [{type: String, unique: true, required: true}],
    tagsDC: [{type: String, unique: true, required: true}],
    age: { type: Number }
},

{
    timestamps: true
}
);

module.exports = mongoose.model('heroesDC', schema);