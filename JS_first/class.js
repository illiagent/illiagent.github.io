function Car({ name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10 }) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.fuelCapacity = fuelCapacity;
  this.fuelConsumption = fuelConsumption;
}
// метод полное название машины
Car.prototype.getFullName = function() {
  return this.name + " " + this.model;
};
// метод год машины
Car.prototype.getAge = function() {
  return this.year;
};
// метод цвет машины
Car.prototype.changeColor = function(color) {
  if (this.color === color) {
    alert("up to tou");
  } else {
    alert(`цвет машины изменен на ${color}`);
    return (this.color = color);
  }
};

//fuel
function calculateWay(kilometers, fuel) {
  this.fuelCapacity = fuel;
  let needAmountOfFuel = (kilometers * this.fuelConsumption) / 100;
  if (fuel < 10) {
    alert("you need to refuel!");
  } else {
    let time = kilometers / this.maxSpeed;
    alert(`дорога займет ${time} часов`);
    if (needAmountOfFuel <= fuel) {
      console.log(needAmountOfFuel);
      alert(`у вас достаточное количество топлива: ${needAmountOfFuel}  литров`);
    } else {
      let countOfRefuels = Math.ceil(needAmountOfFuel / fuel) - 1;
      alert(`вам потребуется дозаправка полных баков: ${countOfRefuels}`);
    }
  }
}

