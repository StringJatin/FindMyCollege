import express from 'express';
const router = express.Router();
import College from '../models/College.js';

// GET all colleges
router.get('/', async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET colleges by JEE rank
router.get('/rank/:jeeRank', async (req, res) => {
  const { jeeRank } = req.params;
  const { category, gender, state } = req.query;

  try {
    // Step 1: Find all colleges
    const colleges = await College.find();

    // Step 2: Filter the courses and degrees in each college
    const filteredColleges = colleges.map(college => {
      const filteredDegrees = college.degrees.map(degree => {
        const filteredBranches = degree.branches.map(branch => {
          // Filter HomeState and OtherState categories based on rank, category, and gender
          const filteredHomeStateCategories = college.state === state ? branch.quotas.homeState.map(categoryItem => {
            if (categoryItem.category === category) {
              const filteredRanks = categoryItem.ranks.filter(rankItem =>
                rankItem.gender === gender && jeeRank <= rankItem.closingRank
              );
              return { ...categoryItem._doc, ranks: filteredRanks };
            }
            return null;
          }).filter(categoryItem => categoryItem && categoryItem.ranks.length > 0) : [];

          const filteredOtherStateCategories = branch.quotas.otherState.map(categoryItem => {
            if (categoryItem.category === category) {
              const filteredRanks = categoryItem.ranks.filter(rankItem =>
                rankItem.gender === gender  && jeeRank <= rankItem.closingRank
              );
              return { ...categoryItem._doc, ranks: filteredRanks };
            }
            return null;
          }).filter(categoryItem => categoryItem && categoryItem.ranks.length > 0);

          return {
            ...branch._doc,
            quotas: {
              homeState: filteredHomeStateCategories,
              otherState: filteredOtherStateCategories
            }
          };
        }).filter(branch => branch.quotas.homeState.length > 0 || branch.quotas.otherState.length > 0);

        return { ...degree._doc, branches: filteredBranches };
      }).filter(degree => degree.branches.length > 0);

      return { ...college._doc, degrees: filteredDegrees };
    }).filter(college => college.degrees.length > 0);

    res.json(filteredColleges); // Send the filtered colleges as response
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// POST a new college
router.post('/', async (req, res) => {
  const {
    name, location, state, instituteType, imageUrl, website, entranceTest, rank, degrees
  } = req.body;

  const college = new College({
    name,
    location,
    state,
    instituteType,
    imageUrl,
    website,
    entranceTest,
    rank,
    degrees
  });

  try {
    const newCollege = await college.save();
    res.status(201).json(newCollege);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
export default router;
