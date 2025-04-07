const express = require('express');
const {
  getBrandValidator,
  createBrandValidator,  // تم تصحيح الاسم
  updateBrandValidator,  // تم تصحيح الاسم
  deleteBrandValidator  // تم تصحيح الاسم
} = require("../utils/validators/brandValidator");

const { 
  getBrands, 
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand
} = require('../services/brandService');

const router = express.Router();

router
  .route('/')
  .get(getBrands)
  .post(createBrandValidator, createBrand); // تم تصحيح الاسم

router
  .route('/:id')
  .get(getBrandValidator, getBrand)
  .put(updateBrandValidator, updateBrand) // تم تصحيح الاسم
  .delete(deleteBrandValidator, deleteBrand); // تم تصحيح الاسم

module.exports = router;
