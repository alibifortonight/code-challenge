import { Router } from 'express';
import { addWord, addSynonym } from '../controllers/wordController.js';

const router = Router();

router.post('/word', addWord);
router.post('/synonym/:wordId', addSynonym);

export default router;