const express = require("express");
const { isSeller, isAuthenticated, isAdmin } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const { upload } = require("../multer");
const Product = require("../model/product");
const Shop = require("../model/shop");
const Order = require("../model/order");
const ErrorHandler = require("../utils/ErrorHandler");
const path = require("path");
const fs = require("fs");


// create product
router.post(
  "/create-product",upload.array("images"), 
  catchAsyncErrors(async (req, res, next) => {
    try {
      const {  name, description, category, tags, originalPrice, discountPrice, stock, shopId } = req.body;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop Id is invalid!!!", 400));

      } else {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);
       // console.log(req.body.shopId);
        const productData = {
          name: name,
          description: description,
          category: category,
          tags: tags,
          originalPrice: originalPrice,
          discountPrice: discountPrice,
          stock: stock,
          images :imageUrls,
          shopId: shopId,
          shop : shop,
        };
  

        const product = await Product.create(productData);

        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);



// get all products of a shop
router.get(
  "/get-all-products-shop/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find({ shopId: req.params.id });
      //console.log(products);
      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


// delete product of a shop
router.delete(
  "/delete-shop-product/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      
      const productData = await Product.findById(req.params.id);
      
      productData.images.forEach(async (imageUrl) => {
          const filename = imageUrl;
          const filePath =  `uploads/${filename}`;
          fs.unlink(filePath, (err) => {
            if (err) {
              console.log(err);
              res.status(500).json({ message: "Error deleting file" });
            }
          });
      })

      const product = await Product.findByIdAndDelete(req.params.id);

      if (!product) {
        return next(new ErrorHandler("Product is not found with this id", 404));
      }    
      res.status(201).json({
        success: true,
        message: "product deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);



// get all products
router.get(
  "/get-all-products",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });

      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// review for a product
router.put(
  "/create-new-review",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { user, rating, comment, productId, orderId } = req.body;

      const product = await Product.findById(productId);

      const review = {
        user,
        rating,
        comment,
        productId,
      };

      const isReviewed = product.reviews.find(
        (rev) => rev.user._id === req.user._id
      );

      if (isReviewed) {
        product.reviews.forEach((rev) => {
          if (rev.user._id === req.user._id) {
            (rev.rating = rating), (rev.comment = comment), (rev.user = user);
          }
        });
      } else {
        product.reviews.push(review);
      }

      let avg = 0;

      product.reviews.forEach((rev) => {
        avg += rev.rating;
      });

      product.ratings = avg / product.reviews.length;

      await product.save({ validateBeforeSave: false });

      await Order.findByIdAndUpdate(
        orderId,
        { $set: { "cart.$[elem].isReviewed": true } },
        { arrayFilters: [{ "elem._id": productId }], new: true }
      );

      res.status(200).json({
        success: true,
        message: "Reviwed succesfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


// all products --- for admin
router.get(
  "/admin-all-products",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find().sort({
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


module.exports = router;