// @ts-check
const express = require('express');

const app = express();
const PORT = 4000;

const mainRouter = require('./routes');
const userRouter = require('./routes/users');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// localhost:4000
app.use('/', mainRouter);

// localhost:4000/users
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express Wolrd');
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
