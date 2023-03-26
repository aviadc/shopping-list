const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ShoppingItem = require("./ShoppingItem");

// console.log("shopping model:",ShoppingItem);

const app = express();
app.use(cors());
app.use(express.json());
const uri =
  "mongodb+srv://aviadc:omar2022@firstcluster.x6zcp.mongodb.net/shoppingList?retryWrites=true&w=majority";

const connect = async () => {
  try {
    mongoose.connect(uri);
    console.log("connect to mongoDB");
  } catch (error) {
    console.log("error:", error);
  }
};

connect();

app.get("/", async (req, res) => {
  try {
    const items = await ShoppingItem.find();
    res.status(200).send(items);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/", async (req, res) => {
  try {
    const item = await ShoppingItem.create(req.body);
    res.status(200).send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const item = await ShoppingItem.findByIdAndDelete(req.params.id);
    ShoppingItem.save();
    res.status(200).send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(5000, () => {
  console.log("we are connected on port 5000");
  // console.log("app expresss", app);
});
