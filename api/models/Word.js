import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    trim: true,
  },
});

const Word = mongoose.model('Word', wordSchema);

export default Word;