import Word from '../models/Word.js';

export const addWord = async (req, res) => {
  const { word } = req.body;
  if (!word) {
    return res.status(400).json({ error: 'Word is required.' });
  }

  try {
    const newWord = new Word({ word });
    await newWord.save();
    return res.status(201).json(newWord);
  } catch (error) {
    console.error('Failed to add word:', error);
    return res.status(500).json({ error: 'Failed to add word.' });
  }
};