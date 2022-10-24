var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_SHRINK = 20;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 80;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barHeight = CLOUD_HEIGHT - 6 * GAP - 4 * FONT_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(CLOUD_WIDTH / 2 + x, y + CLOUD_SHRINK);
  ctx.lineTo(CLOUD_WIDTH + x, y);
  ctx.lineTo(CLOUD_WIDTH + x, CLOUD_HEIGHT + y);
  ctx.lineTo(x, CLOUD_HEIGHT + y);
  ctx.closePath();
  ctx.fillStyle = 'color';
  ctx.fill();
};

var getMaxElement = function (arr) {
  if (!arr.length) {
    return 0;
  }
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    var playerBarHeight = barHeight * times[i] / maxTime;

    ctx.fillText(Math.floor(+times[i]), CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i,
      CLOUD_Y + (GAP + FONT_GAP) * 3 + barHeight - playerBarHeight);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var color = 'rgba(0, 0, 255, ' + Math.random() + ')';
      ctx.fillStyle = color;
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i,
      CLOUD_Y + (GAP + FONT_GAP) * 3 + GAP + barHeight - playerBarHeight, BAR_WIDTH, playerBarHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + (TEXT_WIDTH + GAP) * i,
      CLOUD_Y + (GAP + FONT_GAP) * 4 + barHeight );
  }
};
