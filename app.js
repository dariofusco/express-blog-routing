const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts.js");

app.use(express.static('./public'));

app.use('/', postsRouter);

app.use('/:slug', postsRouter);

app.use('/create', postsRouter);

app.listen(port, () => {
    console.log('Server attivo sulla porta http://localhost:3000.');
});