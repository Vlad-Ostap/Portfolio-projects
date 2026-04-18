import { menClothing, womenClothing } from "../server/data/cardData";

export default function handler(req, res) {
  res.status(200).json({ menClothing, womenClothing });
}