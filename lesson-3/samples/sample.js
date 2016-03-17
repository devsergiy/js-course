var myLib;


myLib();

myLib = function () {
}


myLib2();

function myLib2() {

}

a = {
  myfunc: function() {

  }
}

a = {}

function myLib2() {

}

this

a.myfunc = myLib2;

a.myfunc = function() {

}




function parentFunction (param1 ) {
  console.log( 'Вызвана функция родитель.' );
  var x = 10;

  return function childFunc () {
    var y = 11;
    return x + y;
  }
}


var z = parentFunction();


var z = (function(param1 ) {
  console.log( 'Вызвана функция родитель.' );
  var x = 10;

  return function childFunc () {
    var y = 11;
    return x + y;
  }
})();
