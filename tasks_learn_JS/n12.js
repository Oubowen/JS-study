function pow (x, n) {
    var result = x;
    for(var i = 1; i < n; i++){
        result *= x;
    }
   return result;
}

 x = prompt("x?",'');
 n = prompt("n?",'');

 if ( n <= 1 ) {
     alert ("Введите число больше единицы!!!");
 } else {
     alert (pow (x, n));
 }