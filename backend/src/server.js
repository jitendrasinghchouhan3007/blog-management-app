import dotenv from 'dotenv'

import app from './app.js'
import { connectDb } from './config/db.js'

dotenv.config()

const port = Number.parseInt(process.env.PORT || '5000', 10)

async function startServer() {
  await connectDb()

  app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`)
  })
}

startServer().catch((error) => {
  console.error('Unable to start server')
  console.error(error)
  process.exit(1)
})