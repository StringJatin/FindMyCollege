// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePic: { type: String }, 
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

userSchema.statics.findOrCreate = async function(condition) {
  const User = this;
  try {
    let user = await User.findOne({ googleId: condition.googleId });
    if (user) {
      return user;
    } else {
      // Create a new user with the provided condition
      user = new User(condition);
      await user.save();
      return user;
    }
  } catch (err) {
    throw err;
  }
};

export default mongoose.model('User', userSchema);
