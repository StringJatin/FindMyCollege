import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true, sparse: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  profilePic: { type: String },
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

// Pre-save hook to hash password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.findOrCreate = async function(condition) {
  const User = this;
  try {
    let user = await User.findOne({ googleId: condition.googleId });
    if (user) {
      return user;
    } else {
      user = new User(condition);
      await user.save();
      return user;
    }
  } catch (err) {
    throw err;
  }
};

// Method to compare password
userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);
