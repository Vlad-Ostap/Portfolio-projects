import express from 'express';
import cors from 'cors';
import path from 'path';
import { menClothing, womenClothing } from './data/cardData.js';
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/get-data', (req, res) => {
    res.json({ menClothing, womenClothing });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});