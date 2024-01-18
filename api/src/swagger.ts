export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'SpaceH API',
      description: 'This api is for SpaceH',
      contact: {
        name: 'Anatolii Olshevskyi',
      },
      servers: ['http://localhost:8080'],
    },
  },
  apis: ['src/app.ts', 'src/controllers/**/*.ts'],
}
