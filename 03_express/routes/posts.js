const express = require('express');

const router = express.Router();

const POST = [
  {
    title: 'Lorem-1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati corporis ipsam perspiciatis impedit, eligendi, sed asperiores unde voluptates natus vitae iste laboriosam facilis nemo odio, nesciunt doloribus enim. Reiciendis!',
  },
  {
    title: 'Lorem-2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati corporis ipsam perspiciatis impedit, eligendi, sed asperiores unde voluptates natus vitae iste laboriosam facilis nemo odio, nesciunt doloribus enim. Reiciendis!',
  },
];

// localhost:4000/posts
router.get('/', (req, res) => {
  res.render('posts', { POST, postCounts: POST.length });
});

router.post('/add', (req, res) => {
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };

      POST.push(newPost);

      res.redirect('/posts');
    } else {
      const err = new Error('폼 데이터 입력을 확인하세요.');
      err.statusCode = 400;
      throw err;
    }
  } else if (req.body) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };

      POST.push(newPost);

      res.redirect('/posts');
    } else {
      const err = new Error('폼 데이터 입력을 확인하세요.');
      err.statusCode = 400;
      throw err;
    }
  }
});

module.exports = router;
