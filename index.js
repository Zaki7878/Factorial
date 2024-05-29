const Factorial = document.querySelector(".Fctorial");
let a =+prompt("enter your number") ;
function factorial( number){
    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1).reduce((a, b) => {
      return a * b;
    });
  
    return c;
}
Factorial.innerText = `Your factorial is : ${factorial(a)}`
  



// document.write(`your factorial is : ${factorial(a)}`)














