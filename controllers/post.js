import mongoose from "mongoose";
// 1 Khởi tạo model
const Posts = mongoose.model('Post', { title: String, img: String, content: String });

// API thêm sản phẩm
export const create = async(req, res) => {
        try {
            const Post = await new Posts(req.body).save();
            res.json(Post)
        } catch (error) {
            res.status(400).json({
                message: "Không thêm được sản phẩm anh ei"
            })
        }
    }
    // API list sản phẩm
export const list = async(req, res) => {
    try {
        const Post = await Posts.find();
        res.json(Post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async(req, res) => {
    try {
        const Post = await Posts.findById(req.params.id);
        res.json(Post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const remove = async(req, res) => {
    try {
        const Post = await Posts.findByIdAndRemove(req.params.id);
        res.json(Post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }

}
export const update = async(req, res) => {
    try {
        const Post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        res.json(Post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}