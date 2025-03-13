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

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" })
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
