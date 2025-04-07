const express = require('express');

const {
    createSubCategory,
    getSubCategory,
    getSubCategories,
    updateSubCategory,
    deleteSubCategory,
    setCategoryIdToBody,
    createFilterObj,
} = require('../services/subCategoryService');

const {
    createSubCategoryValidator,
     getSubCategoryValidator,
     updateSubCategoryValidator,
     deleteSubCategoryValidator,
} = require('../utils/validators/subCategoryValidator');

const router = express.Router({mergeParams: true});


// mergeParams: Allow us to access parameters on other routers  
// ex: We need to access categoryId from category router

router
    .route('/')
    .post(setCategoryIdToBody,createSubCategoryValidator, createSubCategory)
    .get(createFilterObj,getSubCategories);

router
.route('/:id')
.get(getSubCategoryValidator ,getSubCategory)
.put(updateSubCategoryValidator, updateSubCategory)
.delete(deleteSubCategoryValidator , deleteSubCategory) ;

module.exports = router;
