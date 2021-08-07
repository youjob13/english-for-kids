import { Schema, model } from 'mongoose';
import Word from './Word';

const Category = new Schema({
  category: {type: String, required: true},
  words: [{type: Schema.Types.ObjectId, ref: 'Word'}],
});

export default model('CategoryPage', Category);
