import { basicAuth } from 'hono/basic-auth'
import { Routes } from '../types'
import { Hono } from 'hono'

export const addAuth = (app: Hono) => app.use(
  Routes.HOME,
  basicAuth({
    username: 'test',
    password: 'test',
  })
)