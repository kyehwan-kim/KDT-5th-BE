// @ts-check
function multiplication(number, callback) {
  let answer = 0;
  setTimeout(() => {
    answer = number * number;
    callback(answer);
  }, 2000);
}

function say(result) {
  console.log(result);
}

multiplication(3, say);
