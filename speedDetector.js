function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    // Calculate how many km/s above the speed limit
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  }
}

// Test the function with different speeds
const carSpeed = 200;
checkSpeed(carSpeed); 
