function binToDec(string) {
  var array = string.split("").reverse();
  var dec = 0;
  for(var i = 0; i <= array.length-1; i++) {
    if (array[i] === '1')
      dec += Math.pow(2, i);
  }
  return dec.toString();
}

function triToDec(string) {
  var array = string.split("").reverse();
  var dec = 0;
  for(var i = 0; i <= array.length-1; i++) {
    if (array[i] == '1')
      dec += (Math.pow(3, i) * 1);
    else if (array[i] == '2')
      dec += (Math.pow(3, i) * 2);
  }

  return dec.toString();
}

function anyToDec(string, base) {
  var array = string.split("").reverse();
  var numArray = []
  var dec = 0

  array.forEach(function(element, index) {
    numArray.push(parseNum(element));
  })


  for(var i = 0; i <= numArray.length -1; i++) {
    dec += (Math.pow(base, i) * numArray[i])
    //The loop when processing 123 for base 8
    //dec += (Math.pow(8, 0) * 3);
    //dec += (Math.pow(8, 1) * 2);
    //dec += (Math.pow(8, 2) * 1);

  }
  return dec;
}

function parseNum(character) {
  var keys = {"0" : 0, "1" : 1, "2" : 2, "3" : 3, "4" : 4, "5" : 5, "6" : 6, "7" : 7, "8" : 8, "9" :
   9, "a" : 10, "b" : 11, "c" : 12, "d" : 13, "e" : 14, "f" : 15}
   return keys[character];
}





function hexToDec(string) {
  var array = string.split("").reverse();
  var dec = 0;
  for(var i = 0; i <= array.length-1; i++) {
    if (array[i] == '1')
      dec += (Math.pow(16, i) * 1);
    else if (array[i] == '2')
      dec += (Math.pow(16, i) * 2);
    else if (array[i] == '3')
      dec += (Math.pow(16, i) * 3);
    else if (array[i] == '4')
      dec += (Math.pow(16, i) * 4);
    else if (array[i] == '5')
      dec += (Math.pow(16, i) * 5);
    else if (array[i] == '6')
      dec += (Math.pow(16, i) * 6);
    else if (array[i] == '7')
      dec += (Math.pow(16, i) * 7);
    else if (array[i] == '8')
      dec += (Math.pow(16, i) * 8);
    else if (array[i] == '9')
      dec += (Math.pow(16, i) * 9);
    else if (array[i] == 'a')
      dec += (Math.pow(16, i) * 10);
    else if (array[i] == 'b')
      dec += (Math.pow(16, i) * 11);
    else if (array[i] == 'c')
      dec += (Math.pow(16, i) * 12);
    else if (array[i] == 'd')
      dec += (Math.pow(16, i) * 13);
    else if (array[i] == 'e')
      dec += (Math.pow(16, i) * 14);
    else if (array[i] == 'f')
      dec += (Math.pow(16, i) * 15);
  }
  return dec.toString();
}
