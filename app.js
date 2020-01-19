const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/teapot', (req,res)=>{
  res.set('X-viet', 'teapots-are-great-header')
  res.status(418)
  res.send("I'm a teapot!")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
