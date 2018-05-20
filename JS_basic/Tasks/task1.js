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
