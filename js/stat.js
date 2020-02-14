'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var GAP_TEXT = 20;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;
  var BAR_X = CLOUD_X + (CLOUD_WIDTH - BAR_GAP * 3 - BAR_WIDTH * 4) / 2;
  var BAR_Y = CLOUD_Y + CLOUD_HEIGHT - GAP_TEXT;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    var offset = 15;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - offset, y + CLOUD_HEIGHT / 3);
    ctx.lineTo(x + offset, y + CLOUD_HEIGHT - offset);
    ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT);
    ctx.lineTo(x + CLOUD_WIDTH - offset, y + CLOUD_HEIGHT - offset);
    ctx.lineTo(x + CLOUD_WIDTH + offset, y + CLOUD_HEIGHT / 3);
    ctx.lineTo(x + CLOUD_WIDTH, y);
    ctx.lineTo(x + CLOUD_WIDTH / 2, y + offset);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fill();
  };

  var getSaturation = function () {
    var number = Math.round(Math.random() * 100);
    var hslColors = 'hsl(240, ' + number + '%, 50%)';
    return hslColors;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = '16 PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP_TEXT, CLOUD_Y + GAP + GAP_TEXT);
    ctx.fillText('Список результатов:', CLOUD_X + GAP_TEXT, CLOUD_Y + GAP + GAP_TEXT + GAP_TEXT);

    var BAR_MAX = window.util.getMaxElement(times);
    var MY_COLOR = 'rgba(255, 0, 0, 1)';

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000000';
      ctx.fillText(players[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y);
      ctx.fillText(Math.round(times[i]), BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y - (GAP_TEXT + BAR_HEIGHT * times[i] / BAR_MAX + GAP));
      if (players[i] === 'Вы') {
        ctx.fillStyle = MY_COLOR;
      } else {
        ctx.fillStyle = getSaturation();
      }
      ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y - (GAP_TEXT + BAR_HEIGHT * times[i] / BAR_MAX), BAR_WIDTH, BAR_HEIGHT * times[i] / BAR_MAX);
    }
  };
})();
