import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import collegeRoutes from './routes/collegeRoutes.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to mongodb!');
  })
  .catch((err) => {
    console.log("not connected", err);
  });



const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/colleges', collegeRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});