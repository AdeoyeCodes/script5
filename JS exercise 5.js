/*var numbers = [2, 6, 4, 4, 2, 7, 1, 9, 5, 7 ];

function calculateMean() {
 if (!Array.isArray(numbers) || numbers === 0) {
 return null;
}

var sum = 0 ;
var length = numbers.length;

for (x = 1; x < length; x++) {
 sum += numbers[x];
}
 var mean = sum / length ;

 return mean;

}
 var mean = calculateMean();
console.log(mean);*/



function calculateMean() {
 var numbers = [2, 6, 4, 4, 2, 7, 1, 9, 5, 7];
    if (!Array.isArray(numbers) || numbers.length === 0) {
    alert('Wrong input');
    return false;
  }

  var sum = 0;
  var length = numbers.length;

  for (var x = 0; x < length; x++) {
    sum = sum + numbers[x];
  }
  var mean = sum / length;
  return mean;
  
  
}

document.getElementById('calculateBtn').onclick = function() {
var display= '' ;
display += 'The mean is: ' + calculateMean();
document.getElementById('find').innerHTML = display ;
document.getElementById('find').style.display = 'block';
};
 