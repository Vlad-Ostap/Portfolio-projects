import express from 'express';
import cors from 'cors';
import { menClothing, womenClothing } from './data/cardData.js';
const router = express.Router();

router.use(cors());

router.get('/', (req, res) => {
    res.json({ menClothing, womenClothing });
});

export default router;