const MongoClient = require('mongodb').MongoClient;
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
const uri = "mongodb+srv://aallanrd:cgceWrMXUXm0L0fq@cluster0.69z47.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });


async function listDatabases(client){
  let databases = [];
  let databasesList = await client.db().admin().listDatabases().then();
  databasesList.databases.forEach(db =>
    databases.push(` - ${db.name}`)
  );
  return databases;
};

async function getDBS(){
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    // Make the appropriate DB calls
    let dbs = await  listDatabases(client);
    return dbs;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}


module.exports = {
  getDBS : getDBS
}

