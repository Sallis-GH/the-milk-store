import { MongoClient } from 'mongodb'
import { ProductData } from '../Interfaces'



async function getData() {
  const uri = process.env.MONGO_DB_URI
  const client = new MongoClient(uri)
  try {
    const database = client.db('MilkStoreDB')
    const productsCollection = database.collection<ProductData>('Products')
    const cursor = await productsCollection.find<ProductData>({})
    const products = []
    await cursor.forEach(ele => { products.push(ele) })
    return products;
  } finally {
    await client.close()
  }
}

export default getData
