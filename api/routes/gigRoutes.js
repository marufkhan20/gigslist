const {
  createNewGigController,
  getSingleGigController,
  getUserAllGigsController,
  getAllGigsController,
} = require("../controllers/gigController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all gigs
router.get("/all-gigs", getAllGigsController);

// get user all gigs
router.get("/", authMiddleware, getUserAllGigsController);

// get gig by id
router.get("/:id", authMiddleware, getSingleGigController);

// create new gig
router.post("/", authMiddleware, createNewGigController);

module.exports = router;
