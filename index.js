import express from 'express'
import { bootstarp } from './src/Modules/main.js'

const app = express()
const port = process.env.PORT || 8000

await bootstarp(app, express)

app.listen(port, "0.0.0.0", () => console.log(`saraha app listening on port ${port}!`))
