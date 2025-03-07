import express from 'express'
import mongoose from "mongoose"

const app = express()


// ველების განსაზღვრა
const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number
  },
  { timestamps: true }
)

// მოდელი, რომელსაც DB ოპერაციებისთვის გამოვიყენებთ
const Product = mongoose.model("Product", productSchema)

app.get("/", async (req, res) => {
  const productList = await Product.find()

  console.log(productList)
  return res.json({ products: productList })
})

app.listen(3333, async () => {
  console.log("Running on port 3333")
  try {
    // demo მონაცემთა ბაზის სახელია
    // თუ Mongoose-ის მოდელს იყენებთ, ბაზა ავტომატურად შეიქმნება მოდელის კოლექციასთან ერთად
    await mongoose.connect("mongodb://127.0.0.1:27017/products")
    console.log("Connected to the database")
  } catch (error) {
    console.log(error)
  }
})
