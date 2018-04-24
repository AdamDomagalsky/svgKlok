var hands2 = [];
hands2.push(document.querySelector('#secondhand3 > *'));
hands2.push(document.querySelector('#minutehand3 > *'));
hands2.push(document.querySelector('#hourhand3 > *'));

var cx = 130;
var cy = 125;

function shifter(val) {
  return [val, cx, cy].join(' ');
}

var date = new Date();
var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
var minuteAngle = 360 * date.getMinutes() / 60;
var secAngle = 360 * date.getSeconds() / 60;

hands2[0].setAttribute('from', shifter(secAngle));
hands2[0].setAttribute('to', shifter(secAngle + 360));
hands2[1].setAttribute('from', shifter(minuteAngle));
hands2[1].setAttribute('to', shifter(minuteAngle + 360));
hands2[2].setAttribute('from', shifter(hoursAngle));
hands2[2].setAttribute('to', shifter(hoursAngle + 360));

for(var i = 1; i <= 12; i++) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  el.setAttribute('x1', '100');
  el.setAttribute('y1', '30');
  el.setAttribute('x2', '100');
  el.setAttribute('y2', '40');
  el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
  el.setAttribute('style', 'stroke: #ffffff;');
  document.querySelector('.watch3').appendChild(el);
}