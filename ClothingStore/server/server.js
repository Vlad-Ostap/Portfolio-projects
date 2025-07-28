import express from 'express';
import cors from 'cors';
import path from 'path';
import { menClothing, womenClothing } from './data/cardData.js';
const router = express.Router();

router.use(cors());

router.use(express.static(path.join(process.cwd(), '../dist')));

router.get('/', (req, res) => {
    res.json({ menClothing, womenClothing });
});