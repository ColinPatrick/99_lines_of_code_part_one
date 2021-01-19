let friends = ['Elliot', 'Darlene', 'Angela', 'Tyrell', 'Dom'];
var count = 99;
var word = "lines";

for (let n = 0; n < friends.length; n++) {
  console.log(friends[n] + ':');
  while (count > 0) {
    if (count == 1) {
      word = "line";
    }
    console.log(count + ' ' + word + ' of code in the file, ' + count + ' ' + word + ' of code;');
    console.log(friends[n] + ' strikes one out, clears it all out,');
    count = count - 1;
    if (count == 1) {
      word = "line";
    } else {
      word = "lines";
    }
    console.log(count + ' ' + word + ' of code on the wall.');
  }
  count = 99;
}
