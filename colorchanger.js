var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']; //All alphanummerics for hex combination

var color = document.querySelector('.color');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  var hexcolor = '#';
  for(var i=0;i<6;i++){
    hexcolor += arr[randomColorGenerator()]; //Generate the random hexcodes
  }

  document.body.style.backgroundColor = hexcolor;
  color.textContent = hexcolor;
});

function randomColorGenerator(){
    return Math.floor(Math.random() * arr.length);
}