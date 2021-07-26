import {Schema, model} from 'mongoose';

const WordStatistics = new Schema({
  train: {type: Number},
  hit: {type: Number},
  wrong: {type: Number},
});

export default model('WordStatistics', WordStatistics);
