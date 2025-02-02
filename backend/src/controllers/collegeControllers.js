import College from "../models/College.js";

export async function editCollege(req, res) {
    try {
        const { id } = req.params;

        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid college ID" });
        }

        const updatedCollege = await College.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true } 
        );

        if (!updatedCollege) {
            return res.status(404).json({ message: "College not found" });
        }

        res.json(updatedCollege);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}
