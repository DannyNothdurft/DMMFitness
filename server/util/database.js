import { Db, MongoClient, ServerApiVersion }  from 'mongodb';

// const pwd = process.env.MONGO_DB_PWD;
const pwd = 'dmmfitness'; // HIER EUER PASSWORT (noch auslagern)
const user = 'dmmfitness'; // HIER EUER BENUTZERNAME von mongodb
const cluster = "cluster0.vpre8.mongodb.net"; // HIER EUER CLUSTER


// mittels @type visual studio code mitteilen, dass _db den datentyp "Db"
// großer Vorteil: nachher beim import haben wir autocomplete
/** @type {Db} */
let _db;

// Name unser Datenbank
const _database = "dmmfitness";

const _uri = `mongodb+srv://${user}:${pwd}@${cluster}/${_database}?retryWrites=true&w=majority`;

const _client = new MongoClient(_uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// - useNewUrlParser: Determines whether or not to use the new url parser
// - useUnifiedTopology: False by default. Set to true to opt in to using the MongoDB driver's new connection 
//   management engine. You should set this option to true, except for the unlikely case that it prevents 
//   you from maintaining a stable connection.

// more: https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1


async function mongoConnect() {

  try {
    await _client.connect();
    
    _db = _client.db(); // mit pangaea verbinden
    listMyDatabases(); // optional: listet vorhandene Datenbanken auf (async function but waiting is not neccessary)
    return true;
  } catch(err) {
    console.error("Connection to MongoDB Failed:", err);
    return false;
  }
}

// Warum nicht "_db" variable direkt exportieren und nachher importieren
// Sicherheit: Die Variable "_db" kann dann nicht mehr von außen bzw. in der anderen DAtei, 
// in der sie importiert wird, verändert werden
// in anderen Worten: Es ist eine Art getter Funktion

/**
 * 
 * @returns {Db}
 */
function getDb(){
  return _db ? _db : false
}


// optional: Zeige alle Datenbanken
async function listMyDatabases() {
  // ↓ admin(): "Ermöglicht dem Benutzer den Zugriff auf die Admin-Funktionen von MongoDB"
  const databasesList = await getDb().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

export {mongoConnect, getDb}
