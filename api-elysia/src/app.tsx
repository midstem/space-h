import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import * as Controllers from './controllers'
import { Routes } from './types'
import { swagger } from '@elysiajs/swagger'
import { Swagger } from './Swagger'
import { TodoSchema } from './controllers/TodoController/schema'

const app = new Elysia()
    .use(swagger(Swagger))
    .use(html())
    .get(Routes.HOME, Controllers.HomeController.get)
    .get(Routes.TODO, Controllers.TodoController.get)
    .post(Routes.TODO, Controllers.TodoController.post, TodoSchema)
    .listen(8080)

    export type App = typeof app

    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)