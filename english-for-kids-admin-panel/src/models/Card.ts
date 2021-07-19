import {Schema, model} from 'mongoose';

const Card = new Schema({
  name: {type: String, required: true},
  translate: {type: String, required: true},
  imageSRC: {type: String, required: true},
  audioSRC: {type: String, required: true},
});

export default model('Card', Card);
