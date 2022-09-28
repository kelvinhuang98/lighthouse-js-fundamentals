const carPassing = function (cars, speed) {
  let time = Date.now();
  let car = {
    time: time,
    speed: speed,
  };
  cars.push(car);
  return cars;
};
