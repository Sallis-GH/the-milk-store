import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import getData from './db/products';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.get('/api/products', async (req: Request, res: Response) => {
  const products = await getData()
  res.json(products)
});

app.get('/api/products/:id',async (req: Request, res: Response) => {
  const products = await getData()
  const filteredProducts = products.filter(product => product.id === req.params.id)
  if (filteredProducts.length < 1) {
    res.status(404).send('Product not found')
    return
  }
  res.json(filteredProducts)
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});