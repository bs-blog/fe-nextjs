const express = require('express')
const next = require('next')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000

const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const routesConfig = require('./routes/pages')
const routes = routesConfig()

app.prepare().then(() => {
  const server = express()

  server.get('/hello', (req, res) => {
    res.end('good')
  })

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query = {} } = parsedUrl
    const route = routes[pathname]

    // getInitialProps need to get /page/:id
    const paramLast = req.url.split('/').slice(-1)[0] || null
    req.paramLast = paramLast

    if (route) {
      return app.render(req, res, route.page, query)
    }
    return handle(req, res)
  })

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
