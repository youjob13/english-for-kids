import {Schema, model} from 'mongoose';

const Word = new Schema({
  name: {type: String, required: true},
  translate: {type: String, required: true},
  imageSRC: {type: String, required: true},
  audioSRC: {type: String, required: true},
});

export default model('Word', Word);
