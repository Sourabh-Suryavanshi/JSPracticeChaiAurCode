// getTag = (arr, start, end) => "</" + arr.slice(start + 1, end + 1);
// function y(str) {
//   let arr = Array.from(str);
//   let res = "";
//   let count = arr.filter((x) => x == "<");
//   for (let j = 0; j < count.length; j++) {
//     let start = arr.indexOf("<");
//     let end = arr.indexOf(">");
//     let temp = getTag(arr, start, end);
//     res = temp + res;
//     arr = arr.splice(end + 1);
//   }
//   console.log(str + res.replaceAll(",", ""));
// }

// let x = y("<p>Hellijnnfkv<div>jkqehrgkhf<h2>hello");
// getTag = (arr, start, end) => ;
function y(str) {
  let res = "";
  let str1 = str;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "<") count++;
  }
  for (let j = 0; j < count; j++) {
    let start = str.indexOf("<");
    let end = str.indexOf(">");
    res = "</" + str.slice(start + 1, end + 1) + res;
    str = str.slice(end + 1);
  }
  console.log(str1.concat(res));
}

let x = y("<p><div><h2>arms</h2>hello");
