const cors_proxy = require('cors-anywhere')

const host = 'localhost'
const port = 8080

cors_proxy
  .createServer({
    originWhitelist: []
  })
  .listen(port, host, () => {
    console.log(`Proxy running on http://${host}:${port}`)
  })
