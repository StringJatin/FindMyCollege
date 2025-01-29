import { Router } from 'express';
import { getStates, postStates } from "../controllers/otherControllers.js";
const router = Router();

//get all states
router.get('/state-ut',getStates);
router.post('/state-ut',postStates);


export default router;