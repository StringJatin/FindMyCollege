import { Router } from 'express';
import { getStates, postCsvtojson, postStates } from "../controllers/otherControllers.js";
const router = Router();

//get all states
router.get('/state-ut',getStates);
router.post('/state-ut',postStates);


//convert csv file to degrees
router.post('/convert/degrees',postCsvtojson);


export default router;