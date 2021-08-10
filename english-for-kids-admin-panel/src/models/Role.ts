import {Schema, model} from 'mongoose';
import { Model, User } from '../shared/globalVariables';

const Role = new Schema({
  value: {type: String, unique: true, default: User},
});

export default model(Model.ROLE, Role);
