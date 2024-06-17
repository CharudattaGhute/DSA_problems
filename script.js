function set() {
  let data = [20, 49, 50, 39, 28, 21, 34];
  let newel = document.getElementById("element").value;
  let position = document.getElementById("position").value;
  console.warn(data);
  for (let i = data.length - 1; i >= 0; i--) {
    // console.log(data[i])
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = newel;
      }
    }
  }
  document.getElementById("output").innerHTML = data;
}
