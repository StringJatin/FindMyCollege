import State from "../models/State.js";

export const getStates = async(req,res)=>{
     try{
        const result = await State.findOne();
        
        res.status(200).json(result);
        if (!result) {
          return res.status(404).json({ message: 'Data not found' });
        }

        
     }
     catch (error) {
        res.status(500).json({ message: error.message });
      }
}


export const postStates = async(req, res)=>{
  const state = new State(req.body);
  try{
   const result =  await state.save();
    res.status(201).json(result);
  }
  catch(error) {
    res.status(400).json({ message: error.message });
  }
}

export const postCsvtojson = async (req, res) => {
  try {
      if (!req.file) {
          return res.status(400).json({ success : false, error: "No file uploaded." });
      }

      const fileBuffer = Buffer.from(req.file.buffer);

      const formData = new FormData();
      formData.append("csvfile", new Blob([fileBuffer], { type: 'text/csv' }), "data.csv");

      const response = await fetch('https://csv-to-json-wheat.vercel.app/convert', {
          method: 'POST',
          body: formData,
      });

      const json = await response.json();

      const transformedData = json.reduce((acc, entry) => {
        let degree = acc.find(d => d.degreeName === entry.degreeName);
        if (!degree) {
            degree = {
                degreeName: entry.degreeName,
                branches: []
            };
            acc.push(degree);
        }
    
        let branch = degree.branches.find(b => b.branchName === entry.branchName);
        if (!branch) {
            branch = {
                branchName: entry.branchName,
                quotas: {}
            };
            degree.branches.push(branch);
        }
    
        if (!branch.quotas[entry.quotaType]) {
            branch.quotas[entry.quotaType] = [];
        }
    
        let category = branch.quotas[entry.quotaType].find(c => c.category === entry.category);
        if (!category) {
            category = {
                category: entry.category,
                ranks: []
            };
            branch.quotas[entry.quotaType].push(category);
        }
    
        category.ranks.push({
            gender: entry.gender,
            openingRank: parseInt(entry.openingRank),
            closingRank: parseInt(entry.closingRank)
        });
    
        return acc;
    }, []);

      return res.status(response.status).json({success : true, data : transformedData});
  } catch (err) {
      return res.status(500).json({
          success : false,
          error: err.message,
      });
  }
};


