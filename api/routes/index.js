import { Router } from 'express';
import { addWord, addSynonym, getSynonyms } from '../controllers/wordController.js';

const router = Router();

router.post('/word', addWord);
router.post('/synonym/:wordId', addSynonym);
router.get('/synonyms/:word', getSynonyms); // New endpoint

export default router;