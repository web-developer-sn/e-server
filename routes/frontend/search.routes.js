const express=require('express');
const { searchProduct } = require('../../controllers/frontend/search.product');

  const router =express.Router();

  router.get('/search',searchProduct);

  module.exports = router;


