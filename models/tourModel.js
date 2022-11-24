import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
 //you dont need square brackets to make it an array, by using populate 
  //it will automatically making it an array
 gallery: [{ type: mongoose.Schema.Types.ObjectId, ref: "ImageModel" }],
  
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
