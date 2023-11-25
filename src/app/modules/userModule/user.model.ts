import mongoose from 'mongoose';
import { TAddress, TUser } from './user.interface';

const addressSchema = new mongoose.Schema<TAddress>({
    state: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true}
})
const userSchema = new mongoose.Schema<TUser>({
  id: {type: Number, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  address: addressSchema,
  isActive: {type: Boolean, default: true}
});

export const Users = mongoose.model<TUser>('user', userSchema);
