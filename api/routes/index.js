import { Router } from 'express';
import { addWord } from '../controllers/wordController.js';

const router = Router();

router.post('/word', addWord);

export default router;