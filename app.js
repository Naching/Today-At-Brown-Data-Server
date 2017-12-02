const express = require('express')
const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
})

app.use('/static', express.static('days'));

app.listen(3000, () => console.log('App listening on port 3000'));
