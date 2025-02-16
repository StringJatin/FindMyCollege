import express from 'express';
const router = express.Router();
import College from '../models/College.js';
import authenticateToken from '../middlewares/authMiddleware.js';
import { validateCollege } from '../middlewares/validator.js';
import { editCollege } from '../controllers/collegeControllers.js';

// GET all colleges
router.get('/', authenticateToken, async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//GET single college
router.get('/:id', async (req, res) => {
  const { id } = req.params;
   try{
    const college = await College.findById(id);
    if(college){
      res.json(college);
    } else {
      res.status(404).json({ message: 'College not found' });
    }
   }
   catch(error){
     res.status(500).json({ message: error.message });
   }
});

// GET colleges by JEE rank
router.get('/rank/:jeeRank', async (req, res) => {
  const { jeeRank } = req.params;
  const { category, gender, state } = req.query;

  try {
    const pipeline = [
      // Step 1: Match all colleges
      {
        $match: {}
      },

      // Step 2: Unwind degrees to get branches within each degree
      {
        $unwind: "$degrees"
      },

      // Step 3: Unwind branches within each degree
      {
        $unwind: "$degrees.branches"
      },

      // Step 4: Unwind quotas for homeState and otherState
      {
        $unwind: {
          path: "$degrees.branches.quotas.homeState",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $unwind: {
          path: "$degrees.branches.quotas.otherState",
          preserveNullAndEmptyArrays: true
        }
      },

      // Step 5: Filter HomeState categories based on category, gender, and rank
      {
        $addFields: {
          "degrees.branches.quotas.homeState": {
            $filter: {
              input: "$degrees.branches.quotas.homeState",
              as: "categoryItem",
              cond: {
                $and: [
                  { $eq: ["$$categoryItem.category", category] },
                  { $eq: ["$$categoryItem.ranks.gender", gender] },
                  { $lte: [jeeRank, "$$categoryItem.ranks.closingRank"] }
                ]
              }
            }
          },
          "degrees.branches.quotas.otherState": {
            $filter: {
              input: "$degrees.branches.quotas.otherState",
              as: "categoryItem",
              cond: {
                $and: [
                  { $eq: ["$$categoryItem.category", category] },
                  { $eq: ["$$categoryItem.ranks.gender", gender] },
                  { $lte: [jeeRank, "$$categoryItem.ranks.closingRank"] }
                ]
              }
            }
          }
        }
      },

      // Step 6: Remove empty homeState or otherState quotas
      {
        $match: {
          $or: [
            { "degrees.branches.quotas.homeState": { $ne: [] } },
            { "degrees.branches.quotas.otherState": { $ne: [] } }
          ]
        }
      },

      // Step 7: Filter by state (if provided in the query)
      {
        $match: {
          state: state || { $exists: true }
        }
      },

      // Step 8: Group back the documents to restore original structure
      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          location: { $first: "$location" },
          state: { $first: "$state" },
          instituteType: { $first: "$instituteType" },
          imageUrl: { $first: "$imageUrl" },
          website: { $first: "$website" },
          entranceTest: { $first: "$entranceTest" },
          rank: { $first: "$rank" },
          degrees: { $push: "$degrees" }
        }
      }
    ];

    const filteredColleges = await College.aggregate(pipeline);

    res.json(filteredColleges); // Send the filtered colleges as responses
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// POST a new college
router.post('/', authenticateToken, validateCollege, async (req, res) => {
  const {
    name, location, state, instituteType, imageUrl, logo, website, entranceTest, rank, rating, description, cost, faqs, tab_description, campus_life, degrees
  } = req.body;

  const college = new College({
    name, 
    location, 
    state, 
    instituteType, 
    imageUrl, 
    logo, 
    website, 
    entranceTest, 
    rank, 
    rating, 
    description, 
    cost, 
    faqs, 
    tab_description, 
    campus_life, 
    degrees
  });

  try {
    const newCollege = await college.save();
    res.status(201).json(newCollege);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// PUT a college
router.put('/:id',authenticateToken,editCollege);



export default router;
