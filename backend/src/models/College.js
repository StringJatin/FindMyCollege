import mongoose from 'mongoose';

// Schema for opening and closing ranks based on gender
const genderRankSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female']
  },
  openingRank: {
    type: Number,
    required: true
  },
  closingRank: {
    type: Number,
    required: true
  }
});

// Schema for categories within home state and other state
const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: [
      'SC', 'ST', 'OBC-NCL', 'EWS', 'ST(PWD)', 
      'SC(PWD)', 'OBC-NCL(PWD)', 'EWS(PWD)', 
      'OPEN', 'OPEN(PWD)'
    ]
  },
  ranks: {
    type: [genderRankSchema],
    default: []
  }
});

// Schema for quota within branches
const quotaSchema = new mongoose.Schema({
  homeState: {
    type: [categorySchema],
    default: []
  },
  otherState: {
    type: [categorySchema],
    default: []
  }
});

// Schema for branches within degrees
const branchSchema = new mongoose.Schema({
  branchName: {
    type: String,
    required: true
  },
  quotas: {
    type: quotaSchema,
    default: () => ({})
  }
});

// Schema for degrees within colleges
const degreeSchema = new mongoose.Schema({
  degreeName: {
    type: String,
    required: true
  },
  branches: {
    type: [branchSchema],
    default: []
  }
});

// Schema for colleges
const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  instituteType: {
    type: String,
    required: true
  },
  imageUrl: {
    type: [String],
    default: []
  },
  website: {
    type: String,
    default: null
  },
  entranceTest: {
    type: String,
    default: null
  },
  rank: {
    type: Number,
    required: true
  },
  degrees: {
    type: [degreeSchema],
    default: []
  }
}, {
  timestamps: true
});

const College = mongoose.model('College', collegeSchema);

export default College;
