var hands1 = [];
hands1.push(document.querySelector('#secondhand1 > *'));
hands1.push(document.querySelector('#minutehand1 > *'));
hands1.push(document.querySelector('#hourhand1 > *'));
console.log(hands1);
var cx = 100;
var cy = 100;

function shifter1(val) {
  return [val, cx, cy].join(' ');
}

var date1 = new Date();
var hoursAngle1 = 360 * date1.getHours() / 12 + date1.getMinutes() / 2;
var minuteAngle1 = 360 * date1.getMinutes() / 60;
var secAngle1 = 360 * date1.getSeconds() / 60;


hands1[0].setAttribute('from', shifter1(secAngle1));
hands1[0].setAttribute('to', shifter1(secAngle1 + 360));
hands1[1].setAttribute('from', shifter1(minuteAngle1));
hands1[1].setAttribute('to', shifter1(minuteAngle1 + 360));
hands1[2].setAttribute('from', shifter1(hoursAngle1));
hands1[2].setAttribute('to', shifter1(hoursAngle1 + 360));

for(var i = 1; i <= 12; i++) {
  var el1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  el1.setAttribute('id','line1');
  el1.setAttribute('x1', '100');
  el1.setAttribute('y1', '30');
  el1.setAttribute('x2', '100');
  el1.setAttribute('y2', '40');
  el1.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
  el1.setAttribute('style', 'stroke: #ffffff;');
  document.querySelector('#watch1').appendChild(el1);
}