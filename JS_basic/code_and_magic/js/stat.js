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
};
