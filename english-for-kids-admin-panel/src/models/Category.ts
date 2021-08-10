import { Schema, model } from 'mongoose';
import { Model } from '../shared/globalVariables';

const Category = new Schema({
  category: {type: String, required: true},
  words: [{type: Schema.Types.ObjectId, ref: Model.WORD}],
});

export default model(Model.CATEGORY, Category);
