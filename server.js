const express = require('express');
const app = express();

app.use(express.static('public', {
  cacheControl: false,
  setHeaders: function(res) {
    res.removeHeader("x-powered-by");
    res.removeHeader("set-cookie");
    res.removeHeader("Date");
    res.removeHeader("Connection");
    res.removeHeader("Cache-Control");
  }
}));

app.get('/', function (req, res) {
  res.send(`
<head>
  <script src="my_script.js"></script>
</head>
<body>
  <h1>Hello World</h1>
  <div id="for_script"></div>
</body>
`);
});

app.listen(3000);

console.log('server running at http://localhost:3000');
