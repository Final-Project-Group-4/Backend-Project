import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
  image: { type: String, required: [true, "A tour must have an image"] },
  description: {
    type: String,
    required: [true, "A tour must have a description"],
  },
  price: { type: Number, required: [true, "A tour must have a price"] },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"],
  },
  duration: { type: Number, required: [true, "A tour must have a duration"] },
});

export default mongoose.model("TourModel", tourSchema);
