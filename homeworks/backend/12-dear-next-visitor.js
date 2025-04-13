import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

const noteSchema = new mongoose.Schema(
  {
    content: String
  },
  { timestamps: true }
)

const Note = mongoose.model("Note", noteSchema)

app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173"
  })
)

app.post("/note", async (req, res) => {
  const { content } = req.body
  if (!content) return res.status(400).json({ error: "Note cannot be empty." })

  const previousNote = await Note.findOne().sort({ createdAt: -1 })

  await Note.create({ content })

  if (previousNote === null) {
    const fakeNote = {
      content: "Smile :)"
    }

    return res.json({ success: true, previousNote: fakeNote  })
  }

  res.json({ success: true, previousNote })
})

app.listen(3333, async () => {
  console.log("Running on port 3333")
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/notes")
    console.log("Connected to the database")
  } catch (error) {
    console.log(error)
  }
})
