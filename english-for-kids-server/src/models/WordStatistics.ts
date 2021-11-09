import {Schema, model} from 'mongoose';
import { Model } from '../shared/globalVariables';

const WordStatistics = new Schema({
  train: {type: Number},
  hit: {type: Number},
  wrong: {type: Number},
});

export default model(Model.WORD_STATISTICS, WordStatistics);
