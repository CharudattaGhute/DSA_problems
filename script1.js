let arr = [33, 56, 78, 90, 21, 34, 56, 78];
for (let i = 0; i < arr.length; i++) {
  console.log(`array ${[i]} of ${arr[i]}`);
}
// position of array  i want to acess 4 position of number
x = 4;
console.log(`array of position ${x} of ${arr[x]}`);

// traversing array using for of loop using a input format
function get() {
  let input = document.getElementById("input").value;
  if (input < arr.length) {
    let result = arr[input];
    alert(`the position number of ${input} is ${result}`);
    let output = (document.getElementById("output").innerHTML = result);
  } else {
    alert("please enter the valid position");
  }
}
