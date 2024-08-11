const express = require('express');
const { postProduct, getProducts, deleteProduct, getSpeceficProducts, updateProduct } = require('../Controllers/productController');
const router = express.Router() ;


router.get('/' , getProducts)
router.get('/:id' , getSpeceficProducts )
router.post('/' , postProduct )
router.delete('/:id' , deleteProduct)
router.put('/:id' , updateProduct)


module.exports = router;