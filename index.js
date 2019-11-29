const express = require('express');
var proxy = require('express-http-proxy');
const cors = require('cors');
const axios = require('axios').default;
const app = express();
app.use(cors());
target = 'http://daotao.nuce.edu.vn';
app.use('/', proxy(target));

app.post('/app/login', (req, res) => {
  axios
    .post('http://daotao.nuce.edu.vn', req.body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      console.log(response.headers);
      res.send(response.headers);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`sever listen on port ${port}`);
});
