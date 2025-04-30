const productModel = require("../../models/product.model");



const searchProduct = async (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ message: 'Query parameter "q" is required' });
    }
    try {
        const results = await productModel.findOne({
            name: { $regex: query, $options: 'i' }
        });

        res.json({ results });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
;
}

module.exports={
    searchProduct
}