import {Schema, model} from 'mongoose';
import { Model } from '../shared/globalVariables';

const User = new Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  roles: [{type: String, ref: Model.ROLE}],
});

export default model(Model.USER, User);
