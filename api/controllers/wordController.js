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

export const addSynonym = async (req, res) => {
  const { wordId } = req.params;
  const { synonym } = req.body;

  if (!synonym) {
    return res.status(400).json({ error: 'Synonym is required.' });
  }

  try {
    const word = await Word.findById(wordId);
    if (!word) {
      return res.status(404).json({ error: 'Word not found.' });
    }

    const synonymDoc = await Word.findOne({ word: synonym });
    if (!synonymDoc) {
      return res.status(404).json({ error: 'Synonym word not found.' });
    }

    if (!word.synonyms.includes(synonymDoc._id)) {
      word.synonyms.push(synonymDoc._id);
      await word.save();
    }

    return res.status(200).json(word);
  } catch (error) {
    console.error('Failed to add synonym:', error);
    return res.status(500).json({ error: 'Failed to add synonym.' });
  }
};

export const getSynonyms = async (req, res) => {
  const { word } = req.params;

  try {
    const wordDoc = await Word.findOne({ word }).populate('synonyms');
    if (!wordDoc) {
      return res.status(404).json({ error: 'Word not found.' });
    }

    const synonyms = wordDoc.synonyms.map(synonym => synonym.word);
    return res.status(200).json(synonyms);
  } catch (error) {
    console.error('Failed to fetch synonyms:', error);
    return res.status(500).json({ error: 'Failed to fetch synonyms.' });
  }
};

export const getWordsBySynonym = async (req, res) => {
  const { synonym } = req.params;

  try {
    const synonymDoc = await Word.findOne({ word: synonym });
    if (!synonymDoc) {
      return res.status(404).json({ error: 'Synonym not found.' });
    }

    const words = await Word.find({ synonyms: synonymDoc._id });
    const wordList = words.map(word => word.word);
    return res.status(200).json(wordList);
  } catch (error) {
    console.error('Failed to fetch words by synonym:', error);
    return res.status(500).json({ error: 'Failed to fetch words by synonym.' });
  }
};