import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "an image must have a name."],
    unique: [true],
  },
});

const ImageModel = mongoose.model("ImageModel", gallerySchema);

export default ImageModel;
