import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const adminRoles = ['support', 'super', 'writer'];

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    adminRole: {
        type: String, enum: adminRoles,
        default: 'support'
    },
}, { timestamps: true });

// Pre-save hook to hash password
adminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

adminSchema.statics.findOrCreate = async function (condition) {
    const User = this;
    try {
        let user = await User.findOne(condition);

        if (user) {
            return user;
        }

        user = new User(condition);

        await user.save();

        return user;
    } catch (err) {
        throw new Error(`Error in findOrCreate: ${err.message}`);
    }
};


// Method to compare password
adminSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('Admin', adminSchema);
