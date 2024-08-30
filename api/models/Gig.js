const { Schema, model } = require("mongoose");

const gigSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: String,
    completedStep: Number,
    autoRenew: Boolean,
    title: String,
    category: String,
    subCategory: String,
    businessName: String,
    businessEmail: String,
    tags: Array,
    price: Number,
    packages: [
      {
        name: String,
        price: String,
        description: String,
      },
    ],
    description: String,
    state: String,
    city: String,
    streetAddress: String,
    streetState: String,
    streetCity: String,
    offeredRemotely: Boolean,
    logo: String,
    video: String,
    images: Array,
  },
  { timestamps: true }
);

const Gig = model("Gig", gigSchema);

module.exports = Gig;
