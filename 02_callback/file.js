// @ts-check

const fs = require('fs');

fs.readFile('text.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const str = '파일 쓰기 테스트';

fs.writeFile('text1.txt', str, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('파일 쓰기 완료');
  }
});
