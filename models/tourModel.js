import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
  //! image => it should be array of strings since a tour might have more than one images.
  // image: { type: String, required: [true, "A tour must have an image"] },
  images: [String],
  description: {
    type: String,
    required: [true, "A tour must have a description"],
  },
  price: { type: Number, required: [true, "A tour must have a price"] },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"],
  },
  duration: { type: String, required: [true, "A tour must have a duration"] },
});

export default mongoose.model("TourModel", tourSchema);
