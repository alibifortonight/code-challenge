import { Router } from 'express';
import { addWord, addSynonym, getSynonyms, getWordsBySynonym } from '../controllers/wordController.js';

const router = Router();

router.post('/word', addWord);
router.post('/synonym/:wordId', addSynonym);
router.get('/synonyms/:word', getSynonyms);
router.get('/words/:synonym', getWordsBySynonym); // New endpoint

export default router;