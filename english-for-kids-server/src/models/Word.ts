import {Schema, model} from 'mongoose';
import { Model } from '../shared/globalVariables';

const Word = new Schema({
  name: {type: String, required: true},
  translate: {type: String, required: true},
  imageSRC: {type: String, required: true},
  audioSRC: {type: String, required: true},
});

export default model(Model.WORD, Word);
