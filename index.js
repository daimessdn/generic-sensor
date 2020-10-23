// let magSensor = new Magnetometer({frequency: 60});

// magSensor.addEventListener('reading', e => {
//   let container  = docment.getElementById("container");

//   container.innerHTML += "Magnetic field along the X-axis " + magSensor.x;
//   container.innerHTML += "Magnetic field along the Y-axis " + magSensor.y;
//   container.innerHTML += "Magnetic field along the Z-axis " + magSensor.z;
// });
// magSensor.addEventListener('error', event => {
//   console.log(event.error.name, event.error.message);
// });

// magSensor.start();

let gyroscope = new Gyroscope({frequency: 60});

gyroscope.addEventListener('reading', e => {
  let container  = docment.getElementById("container");

  container.innerHTML += "Angular velocity along the X-axis " + gyroscope.x;
  container.innerHTML += "Angular velocity along the Y-axis " + gyroscope.y;
  container.innerHTML += "Angular velocity along the Z-axis " + gyroscope.z;
});
gyroscope.start();
