// @ts-check
const express = require('express');

const app = express();
const userRouter = express.Router();

const PORT = 4000;

const USER = {
  1: {
    email: 'hwan',
    name: '김계환',
  },
};

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express Wolrd');
});

// http://localhost:4000/users
// htttp://127.0.0.1:4000/users
userRouter.get('/', (req, res) => {
  res.send(USER);
});

userRouter.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾고있어요.');
  }
});

// 회원등록
userRouter.post('/add', (req, res) => {
  if (!req.query.id || !req.query.name)
    return res.send('쿼리 입력이 잘못되었습니다.');

  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };

  USER[Object.keys(USER).length + 1] = newUser;

  res.send('회원 등록 완료');

  // if (req.query.id && req.query.name) {
  //   const newUser = {
  //     id: req.query.id,
  //     name: req.query.name,
  //   };

  //   USER[Object.keys(USER).length + 1] = newUser;

  //   res.send('회원 등록 완료');
  // } else {
  //   res.send('쿼리 입력이 잘못 되었습니다.');
  // }
});

//회원수정
userRouter.put('/modify/:id', (req, res) => {
  if (req.query.email && req.query.name) {
    if (req.params.id in USER) {
      USER[req.params.id] = {
        email: req.query.email,
        name: req.query.name,
      };
      res.send('회원 정보 수정 완료!');
    } else {
      res.send('해당 ID를 가진 회원이 존재하지 않습니다.');
    }
  } else {
    res.send('잘못된 쿼리 입력입니다.');
  }
});

//회원삭제
userRouter.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id];
    res.send('회원 삭제 완료');
  } else {
    res.send('해당 ID를 가진 회원이 존재하지 않습니다.');
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
