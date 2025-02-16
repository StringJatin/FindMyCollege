import College from '../models/College.js';
import featuredCollege from '../models/Featured.js'
export async function getfeaturedCollege(req,res){
    try{
        const result = await featuredCollege.find();
        res.json(result);
    }catch(e){
        res.json({ message: e.message });
    }
}


export async function postFeaturedCollege(req, res) {
    const college = new featuredCollege(req.body);
    try {
        const result = await college.save(); 
        res.status(201).json({ success: true, data: result });
    } catch (e) {
        res.json({ message: e.message });
    }
}


export async function postFeaturedCollegeFromCollege(req, res) {
    try {
        const { id } = req.params;
        const college = await College.findById(id);

        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }

        const collegeData = college.toObject();
        collegeData.is_featured = true;  

        delete collegeData._id;

        const newFeaturedCollege = new featuredCollege(collegeData);

        const result = await newFeaturedCollege.save();

        res.status(200).json({ success: true, data: result });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}


export async function editFeaturedCollege(req,res){
    try{
        const result = await featuredCollege.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true } );
        if(!result){
            return res.status(404).json({ message: 'College not found' });
        }
        res.json({ success : true, data : result});

    }catch(e){
        res.json({ message: e.message });
    }
}

export async function deleteFeaturedCollege(req,res){
    try{
        const college = await featuredCollege.findByIdAndDelete(req.params.id);
        if(!college){
            return res.status(404).json({ message: 'College not found' });
        }
        res.json({ success : true, message : 'College deleted successfully'});
    }catch(e){
        res.json({ message: e.message });
    }
}