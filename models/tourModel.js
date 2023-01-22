import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
    maxlength: [40, 'A tour name must have less or equal then 40 characters'],
    //minlength: [10, 'A tour name must have equal or more then 10 characters'],
  },
  duration: {
    type: String,
    required: [true, 'A tour must have a duration'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty value is not valid',
    },
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  subNote: {
    type:String,
    trim: true,
  },
  subtitle: {
    type: String,
    trim: true,
  },
  imgCover: {
    type: String,
    default: 'https://res.cloudinary.com/dkwpmwrlr/image/upload/v1673350629/mount-Meru2_nu33v5.jpg',
  },
  otherImages:{
    type:[String],
    maxlength:3},
  type: {
    type: String,
    required: [true, 'A tour must have a type'],
    enum: {
      values: ['coffee', 'safari', 'hiking'],
      message: 'Type value is not valid',
    },
  },
  scenery: {
    type: String,
    required: [true, 'A tour must have a scenery value'], 
    enum: {
      values: ['good', 'very good', 'excellent'],
      message: 'Type value is not valid',
    },
  },
  locations: [
    {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      description: String,
      day: Number,
    },
  
  ],
  days: [
    {
      number: Number,
      title: {
        type: String,
        required: [true, 'A day must have a title'],
        trim: true,
      },
      description: {
        type: String,
        trim: true,
        required: [true, 'Each day must have a description'],
      },
      elevation: String,
      altitudeGained: String,
      altitudeLost: String,
      descentTo: String,
      note: String,
      hikingTime: String,
    },
  ],
});

export default mongoose.model('TourModel', tourSchema);
