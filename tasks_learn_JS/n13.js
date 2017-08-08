// сумма чисел от 1 до n


function sumTo(n){
  var sum = n;
   for (var i = n; i > 0; --i){
     sum = sum + i;
   }
   return sum - n;
}

alert(sumTo(n));

// более простой вариант

function sumTo(n){
  var sum = 0;
   for (var i = 1; i <= n; i++){
     sum = sum + i;
   }
   return sum;
}

alert(sumTo(n));

// через рекурсию

function sumTo (n){
    if ( n > 1){
        return n + sumTo(n-1);
} else {
    return n;
 }
}
alert(sumTo(100));


// c использованием формулы суммы арифм. прогресии

function sumTo(n) {
     
    return n * (n + 1 ) / 2 ;
}
   n = prompt( 'Вводим эн');
   alert (sumTo(n)); 