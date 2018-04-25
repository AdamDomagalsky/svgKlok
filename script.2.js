var hands2 = [];
hands2.push(document.querySelector('#secondhand2 > *'));
hands2.push(document.querySelector('#minutehand2 > *'));
hands2.push(document.querySelector('#hourhand2 > *'));

var cx2 = 70;
var cy2 = 125;

function shifter2(val) {
  return [val, cx2, cy2].join(' ');
}

var date2 = new Date();
var hoursAngle2 = 360 * (date2.getHours()-6) / 12 + date2.getMinutes() / 2;
var minuteAngle2 = 360 * (date2.getMinutes()+5) / 60;
var secAngle2 = 360 *( date2.getSeconds() + 5) / 60;

hands2[0].setAttribute('from', shifter2(secAngle2));
hands2[0].setAttribute('to', shifter2(secAngle2 + 360));
hands2[1].setAttribute('from', shifter2(minuteAngle2));
hands2[1].setAttribute('to', shifter2(minuteAngle2 + 360));
hands2[2].setAttribute('from', shifter2(hoursAngle2));
hands2[2].setAttribute('to', shifter2(hoursAngle2 + 360));

for(var i = 1; i <= 12; i++) {
  var el2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  el2.setAttribute('id','line2');
  el2.setAttribute('x1', '100');
  el2.setAttribute('y1', '30');
  el2.setAttribute('x2', '100');
  el2.setAttribute('y2', '40');
  el2.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
  el2.setAttribute('style', 'stroke: #ffffff;');
  document.querySelector('#watch2').appendChild(el2);  
}