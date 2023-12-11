import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Usa la variable de entorno para la URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!uri) {
  throw new Error("Por favor, define la variable MONGODB_URI en .env.local");
}

if (process.env.NODE_ENV === "development") {
  // En desarrollo, usa una nueva instancia de MongoClient para cada conexión
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En producción, reutiliza la instancia del cliente
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
