import mongoose from 'mongoose';

// Schema for opening and closing ranks based on gender
const genderRankSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
    enum: ['Gender-Neutral', 'Female-only (including Supernumerary)']
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
      'OPEN','OPEN (PwD)','EWS','OBC-NCL','OBC-NCL (PwD)','SC','ST','EWS (PwD)','SC (PwD)','ST (PwD)'
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

// Schema for cost details
const costSchema = new mongoose.Schema({
  course_type: {
    type: String,
    required: true
  },
  tuition_fees: {
    type: String,
    required: true
  },
  eligibility: {
    type: String,
    required: true
  }
});

// Schema for FAQs
const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

// Schema for tab descriptions
const tabDescriptionSchema = new mongoose.Schema({
  overview_description: {
    type: String,
    required: true
  },
  admissions_description: {
    type: String,
    required: true
  },
  cost_description: {
    type: String,
    required: true
  },
  campusLife_description: {
    type: String,
    required: true
  }
});

// Schema for campus life details
const campusLifeSchema = new mongoose.Schema({
  setting: {
    type: String,
    required: true
  },
  undergraduate_students: {
    type: Number,
    required: true
  },
  average_hostel_cost: {
    type: Number,
    required: true
  },
  sports: {
    type: [String],
    default: []
  },
  housingOptions: {
    type: [String],
    default: []
  },
  extracurricular: {
    type: [String],
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
    required: false
  },
  state: {
    type: String,
    required: false
  },
  instituteType: {
    type: String,
    required: false
  },
  imageUrl: {
    type: [String],
    default: []
  },
  logo: {
    type: String,
    required: false
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
    required: false
  },
  rating: {
    type: Number,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  cost: {
    type: [costSchema],
    default: []
  },
  faqs: {
    type: [faqSchema],
    default: []
  },
  tab_description: {
    type: [tabDescriptionSchema],
    default: []
  },
  campus_life: {
    type: campusLifeSchema,
    required: false
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
