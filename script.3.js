var hands3 = [];
hands3.push(document.querySelector('#secondhand3 > *'));
hands3.push(document.querySelector('#minutehand3 > *'));
hands3.push(document.querySelector('#hourhand3 > *'));

var cx3 = 130;
var cy3 = 125;

function shifter3(val) {
  return [val, cx3, cy3].join(' ');
}

var date3 = new Date();
var hoursAngle3 = 360 * (date3.getHours() +8) / 12 + date3.getMinutes() / 2;
var minuteAngle3 = 360 * (date3.getMinutes()+5) / 60;
var secAngle3 = 360 * (date3.getSeconds()+5) / 60;

hands3[0].setAttribute('from', shifter3(secAngle3));
hands3[0].setAttribute('to', shifter3(secAngle3 + 360));
hands3[1].setAttribute('from', shifter3(minuteAngle3));
hands3[1].setAttribute('to', shifter3(minuteAngle3 + 360));
hands3[2].setAttribute('from', shifter3(hoursAngle3));
hands3[2].setAttribute('to', shifter3(hoursAngle3 + 360));

for(var i = 1; i <= 12; i++) {
  var el3 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  el3.setAttribute('id','line3');
  el3.setAttribute('x1', '100');
  el3.setAttribute('y1', '30');
  el3.setAttribute('x2', '100');
  el3.setAttribute('y2', '40');
  el3.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
  el3.setAttribute('style', 'stroke: #ffffff;');
  document.querySelector('#watch3').appendChild(el3);
}