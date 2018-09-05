var fs = require('fs');

var contents = fs.readFileSync('data.txt', 'utf8');
console.log(contents);

var arr = contents.split("\r\n");


let len = arr.length - 1;  // verji avelord datark simvoli hamar
let string = " ";
while(len > 0) {
  string += arr[len-1];
  string += "\r\n";
  len--;
}
console.log(string);

fs.writeFile('mynewfile.txt', string, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
