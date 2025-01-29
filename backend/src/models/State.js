import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
    type: String,
    data: {
      states: [
        { name: String }
      ],
      unionTerritories: [
        { name: String }
      ]
    }
  });

  const State = mongoose.model('State', stateSchema);
  export default State;