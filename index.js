const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//MongoDB connection string
const uri =
  "mongodb+srv://bootcamp_db_user_asif:fDvTsgtunlEaMS24@cluster0.jrade.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch((error) => {
  console.log(error);
});

//Connecting server
app.get("/", (req, res) => {
  res.send("React CRUD server is running!");
});

app.listen(port, () => {
  console.log(`React CRUD server is running on Port:${port}`);
});

// bootcamp_db_user_asif
// fDvTsgtunlEaMS24
