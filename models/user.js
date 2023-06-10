import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'This email address is already registered'],
    required: [true, 'Please provide an email address'],
  },
  username: {
    type: String,
    unique: [true, "Username already exists!"],
    required: [true, "Username is required!"],
    match: [
      /^[a-zA-Z0-9]{4,25}$/,
      "Username invalid, it should contain 4-25 alphanumeric letters and be unique!",
    ]
  },
  image: {
    type: String,
  }
})

const User = models.User || model('User', UserSchema)

export default User