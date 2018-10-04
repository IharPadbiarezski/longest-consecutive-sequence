module.exports = function longestConsecutiveLength(array) {

  let result = 0;
  let long = 1;
  
  if (array.length === 0 ) return 0;
  if (array.length === 1 ) return 1;

  array.sort( function(x,y) { return x-y;});

  for (let i=1; i<array.length; i++){
    
    if(array[i] - array[i-1] == 1){
      long++;
    } else if (array[i] - array[i-1] == 0){
      continue;
    } else if (array[i]-array[i-1] > 1) {
      result = (long > result) ? long : result ;
      long = 1;
    }

  }

  return result;

}
