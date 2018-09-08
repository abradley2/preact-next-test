// server.js
require("@zeit/next-preact/alias")() // eslint-disable-line
const { createServer } = require("http")
const next = require("next")

const app = next({ dev: process.env.NODE_ENV !== "production" })
const port = process.env.PORT || 3000
const handle = app.getRequestHandler()

app.prepare() // eslint-disable-line
  .then(() =>
    createServer(handle)
      .listen(port, () =>
        global.console.log(`> Ready on http://localhost:${port}`)
      )
  )
