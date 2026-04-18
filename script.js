import express from 'express';
import cors from 'cors';
import path from 'path';
import clothingStoreApi from './ClothingStore/server/server-deploy.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.redirect('https://ostap.uk/#/projects');
});

app.use('/RoyalHeaven', express.static(path.join(process.cwd(), './ClothingStore/dist')));
app.get('/RoyalHeaven/{*splat}', (req, res) => {
    res.sendFile(path.join(process.cwd(), './ClothingStore/dist/index.html'));
});

app.use('/ClothingStore/get-data', clothingStoreApi);
app.use('/ClothingStore', express.static(path.join(process.cwd(), './ClothingStore/dist')));
app.get('/ClothingStore/{*splat}', (req, res) => {
    res.sendFile(path.join(process.cwd(), './ClothingStore/dist/index.html'));
});

app.use('/FlexiCube', express.static(path.join(process.cwd(), './FlexiCube')));
app.get('/FlexiCube', (req, res) => {
    res.sendFile(path.join(process.cwd(), './FlexiCube/index.html'));
});

app.use('/GamingSite', express.static(path.join(process.cwd(), './GamingSite')));
app.get('/GamingSite', (req, res) => {
    res.sendFile(path.join(process.cwd(), './GamingSite/index.html'));
});

app.use((req, res) => {
  res.redirect('https://ostap.uk/#/projects');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});