import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    trim: true,
  },
  synonyms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
  }],
});

const Word = mongoose.model('Word', wordSchema);

export default Word;