// @ts-check
const promise = new Promise(function (resolve, reject) {
  const hwan = 'old';

  if (hwan === 'old') {
    setTimeout(function () {
      resolve('hwan is old');
    }, 3000);
  } else {
    reject('hwan is getting old');
  }
});

promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  });
