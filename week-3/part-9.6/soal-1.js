function changeMe(arr) {
  if (arr.length === 0) return console.log('""');

  let init = {};
  for (let i = 0; i < arr.length; i++) {
    let firstName = arr[i][0] || "First Name";
    let lastName = arr[i][1] || "Last Name";
    let gender = arr[i][2] || "Gender";
    let age = arr[i][3]
      ? new Date().getFullYear() - arr[i][3]
      : "Invalid Birth Year";

    init.firstName = firstName;
    init.lastName = lastName;
    init.gender = gender;
    init.age = age;

    let huruf = i + 1;
    console.log(`${huruf} ${firstName} ${lastName}:`);
    console.log(init);
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// 2. Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
