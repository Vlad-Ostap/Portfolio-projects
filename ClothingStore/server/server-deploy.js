import express from 'express';
import { menClothing, womenClothing } from './data/cardData.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ menClothing, womenClothing });
});

export default router;