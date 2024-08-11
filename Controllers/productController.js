const Product = require('../Models/product.model')

exports.getProducts = async (req, res) => {
    try {
         const products = await Product.find() ;
         res.json(products)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.getSpeceficProducts = async (req, res) => {
    try {
        const id = req.params.id 
         const products = await Product.findById(id) ;
         res.json(products)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.postProduct = async ( req , res) => {
    try {
        const newProduct = req.body ; 
        const result = await Product.create(newProduct) ;
        res.json(result)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}


exports.deleteProduct = async ( req , res) => {
    try {
        const id = req.params.id ;
        await Product.findByIdAndDelete(id) 
        const result = await Product.find() ;
        res.json(result)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.updateProduct = async (req , res) => {
     try{
               const id = req.params.id 
               const updateProduct = req.body ;
               await Product.findByIdAndUpdate(id , updateProduct)
               const result = await Product.findById(id) ;
               res.json(result)
     }
     catch (err) {
        res.status(400).json({ message: err.message })
    }
}