const express = require('express')
const app = express()

app.use('/static', express.static('days'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
