import express from 'express'
import mongoose from "mongoose"

// const express = require("express")

// ველების განსაზღვრა
const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number
  },
  { timestamps: true }
)

// მოდელი, რომელსაც DB ოპერაციებისთვის გამოვიყენებთ
export const Product = mongoose.model("Product", productSchema)

const app = express()

app.use(express.json())

app.get("/products", async (req, res) => {
  const allProducts = await Product.find()
  
  return res.json({ products: allProducts })
})

app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params

  const product = await Product.findById(productId)
  
  return res.json({ product: product })
})

app.post("/products", async (req, res) => {
  const productValues = req.body

  console.log(productValues)

  const newProduct = new Product(productValues)
  await newProduct.save()

  return res.status(201).json({ product: newProduct })
})

app.delete("/products/:productId", async (req, res) => {
  const { productId } = req.params

  await Product.findByIdAndDelete(productId)

  return res.json({ "message": "ok" })
})

app.patch("/products/:productId", async (req, res) => {
  const { productId } = req.params
  const updatedData = req.body

  const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });
  return res.json({ product: updatedProduct })
})

app.listen(3000, async () => {
  console.log("Running on port 3000")
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/demo-products")
    console.log("Connected to the database")
  } catch (error) {
    console.log(error)
  }
})
