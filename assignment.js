// problem 1

function radianToDegree(radian) {
  if (isNaN(radian)) {
    return "please enter a number";
  }
  const pi = Math.PI;
  let degree = radian * (180 / pi);
  return degree.toFixed(2);
}
console.log(radianToDegree(3));
// console.log(radianToDegree("s"));

// problem 2

function isJavsScriptFile(filename) {
  if (filename.endsWith(".js")) {
    return true;
  } else return false;
}

// problem 3
function oilPrice(disel, petrol, octane) {
  const diselPrice = 114;
  let desltr = disel;
  const petrolPrice = 130;
  let petltr = petrol;
  const octanePrice = 135;
  let octltr = octane;

  const totalPrice =
    desltr * diselPrice + petltr * petrolPrice + octltr * octanePrice;

  return totalPrice;
}

// problem 4

function publicBusFare(people) {
  if (people < 50) {
    let remaining = people % 11;
    return 250 * remaining;
  } else if (people >= 50) {
    let remaining1 = people % 50;
    let remaining2 = remaining1 % 11;
    return remaining2 * 250;
  }
}

// problem 5

function isBestFriend(object1, object2) {
  if (object1.name === object2.friend && object1.friend === object2.name)
    return true;
  else return false;
}
