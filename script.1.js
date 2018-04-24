var hands1 = [];
hands1.push(document.querySelector('#secondhand2 > *'));
hands1.push(document.querySelector('#minutehand2 > *'));
hands1.push(document.querySelector('#hourhand2 > *'));

var cx = 70;
var cy = 125;

function shifter(val) {
  return [val, cx, cy].join(' ');
}

var date = new Date();
var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
var minuteAngle = 360 * date.getMinutes() / 60;
var secAngle = 360 * date.getSeconds() / 60;

hands1[0].setAttribute('from', shifter(secAngle));
hands1[0].setAttribute('to', shifter(secAngle + 360));
hands1[1].setAttribute('from', shifter(minuteAngle));
hands1[1].setAttribute('to', shifter(minuteAngle + 360));
hands1[2].setAttribute('from', shifter(hoursAngle));
hands1[2].setAttribute('to', shifter(hoursAngle + 360));

for(var i = 1; i <= 12; i++) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  el.setAttribute('x1', '100');
  el.setAttribute('y1', '30');
  el.setAttribute('x2', '100');
  el.setAttribute('y2', '40');
  el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
  el.setAttribute('style', 'stroke: #ffffff;');
  document.querySelector('.watch2').appendChild(el);
}