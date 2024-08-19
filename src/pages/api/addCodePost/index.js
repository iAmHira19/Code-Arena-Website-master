

import Code from "../../../models/Code"
import connectDB from "../../../middlewares/connectDB";

const handler = async (req, res) => {
    
    if (req.method == "POST") {
        console.log(req.body)
        let code = new Code({
            title: req.body.title,
            slug: req.body.slug,
            body: req.body.content,
            tags: req.body.keywords,
            authorName: req.body.authorName,
            authorUsername: req.body.authorUsername,
            authorAvatar: req.body.authorAvatar
            })
        await code.save()
        res.status(200).json({success: "code Added Successfully "})
       }

    else {
        res.status(400).json({error: "This method is not allowed. "})
    }
}

export default connectDB(handler);