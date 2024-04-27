 // 1

function extractNumbers(str) {
    const regex = /\d+/g;
    const numbersInString = str.match(regex)
    return numbersInString
}

console.log(extractNumbers("a1fg5hj6"))

 // 2

 function fibonacci(n, a = 0, b = 1) {
     if (n === 0) {
         return;
     }

     if (b <= 144) {
         setTimeout(() => {
             console.log(b);
             fibonacci(n - 1, b, a + b);
         }, 1000);
     } else {
         return;
     }
 }

 fibonacci(20);

// 3

  const infoTitle = async () =>  {
     try {
         const response = await fetch("https://fakestoreapi.com/products");
         const data = await response.json();
         const titles = data.map((product) => product.title);
         console.log(titles);
     } catch (error) {
         console.error(error);
     }
 }

 infoTitle();

// 4

 const buttonContainer = document.getElementById("button-container");

 buttonContainer.addEventListener("click", function(event) {
     const clickedButton = event.target;
     document.body.style.backgroundColor = clickedButton.id;
 });
//6
 let counter = 0;
 const counterElem = document.getElementById('counter');

 function incrementCounter() {
     counter += 1;
     counterElem.innerText = counter;
     if (counter === 100) {
         clearInterval(intervalId);
     }
 }

 const intervalId = setInterval(incrementCounter, 1); // Run the function every millisecond





