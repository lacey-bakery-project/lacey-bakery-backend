const server = require('./api/server')
require('dotenv').config()

// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`*** Server listening on port ${port}`)
})
