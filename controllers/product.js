import mongoose from "mongoose";
// 1 Khởi tạo model
const Product = mongoose.model('Product', { name: String, img: String, price: Number, desc: String });

// API thêm sản phẩm
export const create = async(req, res) => {
        try {
            const product = await new Product(req.body).save();
            res.json(product)
        } catch (error) {
            res.status(400).json({
                message: "Không thêm được sản phẩm anh ei"
            })
        }
    }
    // API list sản phẩm
export const list = async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async(req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const remove = async(req, res) => {
    try {
        const products = await Product.findByIdAndRemove(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }

}
export const update = async(req, res) => {
    try {
        const products = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}