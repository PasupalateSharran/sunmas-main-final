const { MongoClient } = require('mongodb');

const uri = "Paste the mongo connection string";
const client = new MongoClient(uri);

let db;
async function connectDB(){
  if (!db) {
    await client.connect();
    db = client.db('Sunmas');
  }
  return db;
}

connectDB()
  .then(() => {
    console.log("mongodb connected")
  })
  .catch(console.dir);

module.exports = { connectDB };
