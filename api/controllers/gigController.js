const Gig = require("../models/Gig");
const uploadthing = require("../utils/uploadthing.js");
const path = require("path");

// get all gigs controller
const getAllGigsController = async (req, res) => {
  try {
    const { _id, role } = req.user || {};

    let gigs;

    if (role === "admin") {
      gigs = await Gig.find();
    } else {
      gigs = await Gig.find({ user: _id });
    }

    res.status(200).json(gigs);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// get gig single controller
const getSingleGigController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const { _id, role } = req.user || {};

    let gig;

    if (role === "admin") {
      gig = await Gig.findById(id);
    } else {
      gig = await Gig.findOne({ _id: id, user: _id });
    }

    res.status(200).json(gig);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// create new gig controller
const createNewGigController = async (req, res) => {
  try {
    const { _id: userId } = req.user || {};
    const { _id } = req.body || {};

    if (_id) {
      // update gig
      const updatedGig = await Gig.findByIdAndUpdate(
        _id,
        { $set: req.body },
        { new: true }
      );

      res.status(200).json(updatedGig);
    } else {
      delete req.body?._id;
      console.log("hello");
      console.log("body", req.body);
      // create new gig
      const newGig = new Gig({
        ...req.body,
        user: userId,
      });

      await newGig.save();
      res.status(201).json(newGig);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// uploadFileController
const uploadFileController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const file = req.file;

    console.log("file", file);

    if (!file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded." });
    }

    // Correct the file path using path.join
    const correctPath = path.join(file.destination, file.filename);
    console.log("Correct file path:", correctPath);

    const {
      fieldname,
      originalname,
      encoding,
      mimetype,
      destination,
      filename,
      size,
    } = file || {};

    const { onUploadComplete, onUploadError, input } = uploadthing.upload({
      fieldname,
      originalname,
      encoding,
      mimetype,
      destination,
      filename,
      path: destination + filename,
      size,
    });
    console.log("input", input());

    console.log("onUploadComplete", onUploadComplete());
    console.log("onUploadError", onUploadError().onUploadError());
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllGigsController,
  getSingleGigController,
  createNewGigController,
  uploadFileController,
};
