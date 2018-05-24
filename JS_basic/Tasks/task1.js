//задача про велосипедистов

var calculateDistance = function (time, speedOfFirstCyclist, speedOfsecondCyclist) {

  var distanceOfFirstCyclist = speedOfFirstCyclist * time;
  var distanceOfSecondCyclist = speedOfsecondCyclist * time;
  var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;

  return totalDistance;
};

var firstDistance = calculateDistance(3,12,14);
var secondDistance = calculateDistance(5, 1, 2);
console.log(firstDistance  / secondDistance % 2);


//canvas

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'gold';
ctx.fillRect(100,100,505,100);

ctx.fillStyle = 'black';
ctx.fillRect(250,0,205,100);

ctx.fillStyle = 'white';
ctx.fillRect(300,0,120,80);

ctx.fillStyle = 'orange';
ctx.fillRect(50,0,205,100);

ctx.beginPath();
ctx.moveTo(140, 100);
ctx.lineTo(100, 150);
ctx.lineTo(150, 250);
ctx.lineTo(170, 150);
ctx.lineTo(350, 180);
ctx.lineTo(180, 110);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = 'red';
ctx.fill();

ctx.font = '30px Tahoma' ;
ctx.textBaseline = 'hanging';
ctx.fillStyle = 'blue';
ctx.fillText('ghивет из Львова', 50, 10);
ctx.fillText('Aloha', 50, 100);
