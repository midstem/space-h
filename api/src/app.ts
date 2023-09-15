import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { logger } from 'src/helpers'
import router from 'src/routes'
import { Routes } from 'src/types'
import swaggerFile from '../swagger-output.json'

const port = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(router)

app.listen(port, () => {
  app.use(Routes.DOC, swaggerUi.serve, swaggerUi.setup(swaggerFile))
  logger.log(`Express 🥟 Server Listening on port ${port}`)
})
