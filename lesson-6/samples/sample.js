// Array practice
Convert array to another
[1, 2, 3, 4] => ["1a", "2a", "3a", "4a"]

// Метод Array.prototype.join()
// Метод Array.prototype.indexOf()
// Метод Array.prototype.map()
// Метод Array.prototype.forEach()

a = [1, 2, 3, 4]
a.map(function(element){
  return element + "a";
})

///

// конструктор
function Animal(name) {
  this.name = name;
  this.state = 'стоит';
}
// методы в прототипе
Animal.prototype.showState = function() {
  console.log( this.name + ' ' + this.state);
};
Animal.prototype.run = function() {
  this.state = 'бежит';
  this.showState();
};
Animal.prototype.stop = function() {
  this.state = 'стоит';
  this.showState();
};
var animal = new Animal('Зверь');
console.log( animal.state );
// стоит, свойство взято из прототипа
animal.run();
// Зверь бежит
animal.stop();
// Зверь стоит

//Унаследуем Rabbit от Animal

function Rabbit(name) {
  this.name = name;
  this.state = 'стоит';
}

console.log(Rabbit.prototype)

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.jump = function() {
  this.state = 'рыгает';
  this.showState();
};

var rabbit = new Rabbit('Кроллык');
