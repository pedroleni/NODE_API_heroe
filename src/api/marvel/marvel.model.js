const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(

{
    nameMarvel: {type: String, unique: true, required: true},
    emojiMarvel: {type: String, unique: true},
    imagesMarvel: [{type: String, unique: true, required: true}],
    tagsMarvel: [{type: String, unique: true, required: true}],
    ageMarvel: { type: Number }
},

{
    timestamps: true
}
);

module.exports = mongoose.model('heroesMARVEL', schema);