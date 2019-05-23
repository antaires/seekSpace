const express = require('express');
const app = express();
const port = 3000;

// routing -> how an app responds to the client request for a specific endpoint (URL or path)
// and a specific HTTP request method (GET, POST etc)
// form: app.METHOD(PATH, HANDLER)

app.get('/', (req, res) => res.send('hello world!'));
app.post('/', (req, res) => res.send('got a POST request'))
app.put('/', (req, res) => res.send('got a PUT request'))
app.delete('/', (req, res) => res.send('got a DELETE request'))

// to serve static files (eg images, CSS, js files) use express built in middleware
// form: express.static(root, [options])
// set up express to access the public directory:
app.use(express.static('public'))

app.listen(port, ()=> console.log(`listening on poart ${port}`));