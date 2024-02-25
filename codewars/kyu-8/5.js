// Flick Switch

function flickSwitch(arr) {
  let result = [];
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick" && flag === true) {
      flag = false;
    } else if (arr[i] === "flick" && flag === false) {
      flag = true;
    }

    result.push(flag);
  }
  return result;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"])); //[True, False, False, False]
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"])); //[False, False, False, False]
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"])); //[True, True, False, False, True]
