import { MongoClient } from 'mongodb'
import { ProductData } from '../Interfaces'



async function getData() {
  const uri = process.env.MONGO_DB_URI
  const databaseName = process.env.MONGO_DATABASE_NAME
  const collectionName = process.env.MONGO_COLLECTION_NAME
  const client = new MongoClient(uri)
  try {
    const database = client.db(databaseName)
    const productsCollection = database.collection<ProductData>(collectionName)
    const cursor = await productsCollection.find<ProductData>({})
    const products = []
    await cursor.forEach(ele => { products.push(ele) })
    return products;
  } finally {
    await client.close()
  }
}

export default getData
