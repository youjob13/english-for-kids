import { Schema, model } from 'mongoose';
import Card from './Card';

const Category = new Schema({
  category: {type: String, required: true},
  cards: [{type: Schema.Types.ObjectId, ref: 'Card'}],
});

export default model('Category', Category);
