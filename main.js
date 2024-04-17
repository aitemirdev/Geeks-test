
//  1
const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

// 2

function printSecond() {
    let count = 0;
    setInterval(() => {
        count++;
        console.log(`Прошла секунда ${count}`);
    }, 1000);
}

printSecond();

// 3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

count();

// 4

const block = document.querySelector('.block');

block.addEventListener('click', () => {
  if (block.classList.contains('bg-color')) {
    block.classList.remove('bg-color');
  } else {
    block.classList.add('bg-color');
  }
});

// 5

let xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.onload = function() {
    if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        console.log(json);
    } else {
        console.log('Ошибка ' + xhr.status);
    }
};
xhr.send();
