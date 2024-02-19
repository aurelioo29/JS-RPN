// Find out whether the shape is a cube

// To find the volume (centimeters cubed) of a cuboid you use the formula:
// volume = Length * Width * Height
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
// Return true jika kubus bisa memiliki sisi yang sama, return false Sebaliknya.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
// Note: side will be an integer

function cubeChecker(volume, side) {
  let volumecub = Math.abs(volume);
  let sider = side;
  let length = sider;
  let width = sider;

  let hasil = length * width * sider;

  if (volumecub === 0 && hasil === 0) {
    return false;
  } else if (volumecub === hasil) {
    return true;
  } else {
    return false;
  }
}

console.log(cubeChecker(8, 3)); // false
console.log(cubeChecker(8, 2)); // true
console.log(cubeChecker(-8, -2)); // false
console.log(cubeChecker(0, 0)); // false
console.log(cubeChecker(1, 5)); // false
console.log(cubeChecker(125, 5)); // true
