const {
  createNewGigController,
  getSingleGigController,
  getAllGigsController,
  uploadFileController,
} = require("../controllers/gigController");
const authMiddleware = require("../middlewares/authMiddleware");
const path = require("path");

const router = require("express").Router();

// Set up multer for file handling
const multer = require("multer");
const { createRouteHandler } = require("uploadthing/express");
const uploadRouter = require("../utils/uploadthing");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directory where files will be saved
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); // Get the file extension
    cb(null, file.fieldname + "-" + uniqueSuffix + ext); // Save the file with the original extension
  },
});

const upload = multer({ storage: storage });

// get all gigs
router.get("/", authMiddleware, getAllGigsController);

// get gig by id
router.get("/:id", authMiddleware, getSingleGigController);

// create new gig
router.post("/", authMiddleware, createNewGigController);

// upload file
router.put(
  "/upload/:id",
  authMiddleware,
  createRouteHandler({
    router: uploadRouter,
    config: {},
  })
);

module.exports = router;
