import mongoose from 'mongoose';

// Schema for opening and closing ranks based on gender
const genderRankSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: false,
    enum: ['Male','Female','Gender-Neutral', 'Female-only (including Supernumerary)']
  },
  openingRank: {
    type: Number,
    required: false
  },
  closingRank: {
    type: Number,
    required: false
  }
});

// Schema for categories within home state and other state
const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: false,
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
    required: false
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
    required: false
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
    required: false
  },
  tuition_fees: {
    type: String,
    required: false
  },
  eligibility: {
    type: String,
    required: false
  }
});

// Schema for FAQs
const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: false
  },
  answer: {
    type: String,
    required: false
  }
});

// Schema for tab descriptions
const tabDescriptionSchema = new mongoose.Schema({
  overview_description: {
    type: String,
    required: false
  },
  admissions_description: {
    type: String,
    required: false
  },
  cost_description: {
    type: String,
    required: false
  },
  campusLife_description: {
    type: String,
    required: false
  }
});

// Schema for campus life details
const campusLifeSchema = new mongoose.Schema({
  setting: {
    type: String,
    required: false
  },
  undergraduate_students: {
    type: Number,
    required: false
  },
  average_hostel_cost: {
    type: Number,
    required: false
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
const FeaturedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
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
  },
  is_featured : {
    type: Boolean,
    required: false,
    default: false
  }
}, {
  timestamps: true
});

const College = mongoose.model('Featured', FeaturedSchema);

export default College;
