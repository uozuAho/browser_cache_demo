const express = require('express');
const app = express();

app.use(express.static('public', {
  cacheControl: false,
  setHeaders: function(res) {
    res.removeHeader("x-powered-by");
    res.removeHeader("set-cookie");
    res.removeHeader("Connection");
    // res.removeHeader("Date");
    // res.removeHeader("Last-Modified"); // this doesn't work
    // res.set("Cache-Control", "no-store");
    // res.set("Expires", 'Sat, 12 Sep 2001 08:48:28 GMT');
    res.set("Date", 'Sat, 12 Sep 2020 20:33:28 GMT')
    res.set("Last-Modified", 'Sat, 12 Sep 2020 0:10:28 GMT');
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
