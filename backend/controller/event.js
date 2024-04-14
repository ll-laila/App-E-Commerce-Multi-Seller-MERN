const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop = require("../model/shop");
const Event = require("../model/event");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller, isAdmin, isAuthenticated } = require("../middleware/auth");
const router = express.Router();
const fs = require("fs");


// create event
router.post(
  "/create-event",upload.array("images"), 
  catchAsyncErrors(async (req, res, next) => {
    try {
      const {  name, description, category, tags, originalPrice, discountPrice, stock, shopId, start_Date, Finish_Date  } = req.body;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop Id is invalid!!!", 400));

      } else {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);
       // console.log(req.body.shopId);
        const eventData = {
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
          start_Date: start_Date,
          Finish_Date: Finish_Date,
        };

        const event = await Event.create(eventData);

        res.status(201).json({
          success: true,
          event,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


// get all events of a shop
router.get(
  "/get-all-events/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const events = await Event.find({ shopId: req.params.id });
      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


// delete event of a shop
router.delete(
  "/delete-shop-event/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {

      const eventData = await Event.findById(req.params.id);
      
      eventData.images.forEach(async (imageUrl) => {
          const filename = imageUrl;
          const filePath =  `uploads/${filename}`;
          fs.unlink(filePath, (err) => {
            if (err) {
              console.log(err);
              res.status(500).json({ message: "Error deleting file" });
            }
          });
      })


      const event = await Event.findById(req.params.id);

      if (!event) {
        return next(new ErrorHandler("Event is not found with this id", 404));
      }    
  
      res.status(201).json({
        success: true,
        message: "event deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


// get all events
router.get("/get-all-events", async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(201).json({
      success: true,
      events,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});


module.exports = router;