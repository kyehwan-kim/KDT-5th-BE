const express = require('express');

const router = express.Router();

const USER = [
  {
    id: 'hwan',
    name: 'KYEHWAN',
    email: 'hwan@naver.com',
  },
  {
    id: 'pororo',
    name: 'pororo',
    email: 'pororo@gmail.com',
  },
];

// http://localhost:4000/users
router.get('/', (req, res) => {
  res.render('users', { USER, userCounts: USER.length });
});

router.get('/id/:id', (req, res) => {
  const userData = USER.find((user) => user.id === req.params.id);
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾고있어요.');
  }
});

router.post('/add', (req, res) => {
  if (req.query.id && req.query.name && req.query.email) {
    const newUser = {
      id: req.query.id,
      name: req.query.name,
      email: req.query.email,
    };

    USER.push(newUser);

    res.send('회원 추가 완fy');
  } else {
    res.send('쿼리 입력이 잘못 되었습니다.');
  }
});

router.put('/modify/:id', (req, res) => {
  if (req.query.name && req.query.email) {
    const userIndex = USER.findIndex((user) => user.id === req.params.id);
    if (userIndex !== -1) {
      USER[userIndex] = {
        id: req.params.id,
        name: req.query.name,
        email: req.query.email,
      };
      res.send('회원 정보 수정 완료!');
    } else {
      res.send('해당 ID를 가진 회원이 존재하지 않습니다!');
    }
  } else {
    res.send('쿼리 입력이 잘못 되었습니다.');
  }
});

router.delete('/delete/:id', (req, res) => {
  const userIndex = USER.findIndex((user) => user.id === req.params.id);
  if (userIndex !== -1) {
    USER.splice(userIndex, 1);
    res.send('회원 삭제 완료!');
  } else {
    res.send('해당 ID를 가진 회원이 존재하지 않습니다!');
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');

  for (let i = 0; i < USER.length; i += 1) {
    res.write(`<h2>USER ID is ${USER[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER[i].name}</h2>`);
    res.write(`<h2>USER EMAIL is ${USER[i].email}</h2>`);
  }
  res.end('');
});

// router.get('/ejs', (req, res) => {
//   const userCounts = USER_ARR.length;
//   res.render('index', { USER_ARR, userCounts });
// });

module.exports = router;
