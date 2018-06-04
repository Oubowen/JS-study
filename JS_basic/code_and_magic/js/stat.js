//stat.js
'use strict'


window.renderStatistics = function(ctx, names, times) {

    //тень облака
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.moveTo(360, 10);
    ctx.quadraticCurveTo(150,10,150,145);
    ctx.quadraticCurveTo(150,280,360, 280);
    ctx.quadraticCurveTo(570,280,570,145);
    ctx.quadraticCurveTo(570,10,360, 10);
    ctx.fill();

    //облако с крушлыми краями
    ctx.fillStyle = 'white'
    ctx.beginPath();
    ctx.moveTo(350, 0);
    ctx.quadraticCurveTo(140,0,140,135);
    ctx.quadraticCurveTo(140,270,350, 270);
    ctx.quadraticCurveTo(560,270,560,135);
    ctx.quadraticCurveTo(560,0,350, 0);
    ctx.fill();

    //надпись таблички
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 220, 40);

    console.log(times);

   var max = -1;
   var maxIndex = -1;

   //поиск максимального времени
   for (var i = 0; i < times.length; i++) {
     var time = times[i];
     if (time > max) {
       max = time;
       maxIndex = i;
     }
   }

   //выводит надпись про худшее время
   ctx.fillText('Худшее время: ' + Math.round(max / 1000) + 'мс у игрока ' + names[maxIndex], 180, 60);

  //рисует гистограмму
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  var barWidth = 20;
  var indent = 70;
  var initialX = 230;
  var lineHeight = 70;


  for(var i = 0; i < times.length; i++) {

      ctx.fillStyle = 'blue';
      ctx.fillRect(initialX + indent * i, 220 - (times[i] * step),  barWidth,  times[i] * step );
      ctx.fillText(names[i],  initialX + indent * i, lineHeight + histogramHeight + barWidth);

  }



















};
