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