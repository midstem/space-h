import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import router from 'src/routes'
import { ROUTES } from 'src/types'
import { logger } from 'src/helpers'
import { swaggerOptions } from 'src/swagger'

const port = process.env.PORT || 8080
const app = express()
const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use(express.json())
app.use(router)
app.use(ROUTES.doc, swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(port, () => {
  logger.log(`Express 🥟 Server Listening on port ${port}`)
})
