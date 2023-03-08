// @ts-check
const express = require('express');

const app = express();
const PORT = 1324;

app.get('/', (req, res) => {
  res.send('GET method');
});

app.post('/', (req, res) => {
  res.send('POST method');
});

app.put('/', (req, res) => {
  res.send('PUT method');
});

app.delete('/', (req, res) => {
  res.send('DELETE method');
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 실행 중입니다!`);
});
