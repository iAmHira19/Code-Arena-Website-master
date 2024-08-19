

import Code from "../../../models/Code"
import connectDB from "../../../middlewares/connectDB";

const handler = async (req, res) => {
    
   
        res.status(200).json({success: "Success. "})
    
}

export default connectDB(handler);