import express from 'express';
const router = express.Router();
import authenticateToken from '../middlewares/authMiddleware.js';
import { deleteFeaturedCollege, editFeaturedCollege, getfeaturedCollege, postFeaturedCollege, postFeaturedCollegeFromCollege } from '../controllers/featuredControllers.js';

//get featured college
router.get('/',getfeaturedCollege);

//post Featured colleges
router.post('/',authenticateToken,postFeaturedCollege);

//post featured college from college
router.post('/college/:id',authenticateToken, postFeaturedCollegeFromCollege);

//edit featured college
router.put('/:id',authenticateToken,editFeaturedCollege);

//delete featured college
router.delete('/:id',authenticateToken,deleteFeaturedCollege);

export default router;