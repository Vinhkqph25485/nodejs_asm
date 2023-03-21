
import Products from "../models/products";

export const getAll = async (req, res) => {
    try {
        const products = await Products.find()
        if(!products){
            return res.status(404).json({
                message: "Khong co du lieu"
            })
        }
        return res.json(products)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
    
    
}

export const get = async (req, res) => {
    try {
        const products = await Products.findById(req.params.id)
        if(!products){
            return res.status(404).json({
                message: "Khong co du lieu"
            })
        }
        return res.json(products)
    } catch (error) {
        return req.status(500).json({
            message: error
        })
    }
   
    
}

export const create = async (req, res) => {
    try {
        const products = await Products.create(req.body)
        if(!products){
            res.status(404).json({
                message: "Khong them duoc san pham"
            })
        }
        return res.json(products)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
   
}

export const remove = async (req, res) => {
    try {
        await Products.findOneAndDelete({_id: req.params.id})
        res.status(200).json({
            message: "Xoa thanh cong"
        })
    } catch (error) {
        res.status(500).json({
            
        })
    }

}

export const update = async (req, res) => {
    const data = await Products.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    res.status(200).json({
        message: "Sua thanh cong",
        data: data
    })
}
