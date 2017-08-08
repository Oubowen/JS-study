function factorial(n){
    if (n!= 1) {
        return n* factorial(n - 1);
    } else {
        return n
    }
}
  n = prompt("Вводи какого числа факториал посчитать")
alert(factorial(n));


// число Фибоначчи

function fib(n){
  
    return n<= 1 ? n : fib(n-1) + fib(n - 2);
    } 


n = prompt ('Ввести число');
alert(fib(n));


function fib(n){
    var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
 
    var c = a + b;
      
    a = b;
    b = c; 
    
  }
  return b;
}
n = prompt ('Ввести число');
alert(fib(n));