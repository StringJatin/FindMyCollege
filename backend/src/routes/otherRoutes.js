import { Router } from 'express';
import multer from 'multer';
import { getStates, postCsvtojson, postStates } from "../controllers/otherControllers.js";
const router = Router();

//get all states
router.get('/state-ut',getStates);
router.post('/state-ut',postStates);


//convert csv file to degrees
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });
router.post('/convert/degrees',upload.single('csvfile'), postCsvtojson);


export default router;