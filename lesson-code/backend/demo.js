import express from "express";
import mongoose from "mongoose";

const app = express();

// ველების განსაზღვრა
const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
  },
  { timestamps: true }
);

// მოდელი, რომელსაც DB ოპერაციებისთვის გამოვიყენებთ
const Product = mongoose.model("Product", productSchema);

app.use(express.json());

app.get("/products", async (req, res) => {
  const productList = await Product.find();

  console.log(productList);
  return res.json({ products: productList });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    // console.log(product)

    if (product === null) {
      return res.status(404).json({message: "product not found"})
    }

    return res.json(product);
  } catch(error) {
    return res.status(400).json({ error: error.message })
  }
});

app.post("/products", (req, res) => {
  const productValues = req.body;

  const newProduct = new Product(productValues);
  newProduct.save();

  return res.json(newProduct);
});

app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  const updatedValues = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(id, updatedValues, {
    new: true,
  });

  res.json(updatedProduct);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndDelete(id)

  return res.json({ message: "Product deleted" })
})

app.listen(3333, async () => {
  console.log("Running on port 3333");
  try {
    // demo მონაცემთა ბაზის სახელია
    // თუ Mongoose-ის მოდელს იყენებთ, ბაზა ავტომატურად შეიქმნება მოდელის კოლექციასთან ერთად
    await mongoose.connect("mongodb://127.0.0.1:27017/products");
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
  }
});
