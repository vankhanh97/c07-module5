console.log("Line 1 .....");
console.log("Line 2 .....");
const p = new Promise(function (resolve, reject) {
  if (true) {
    resolve("Line 3 .........");
  } else {
    reject("Có lỗi xảy ra");
  }
});
// setTimeout(() => console.log("Line 3 ........."), 1000);
p.then((value) => console.log(value)).catch((value) => console.log(value));
console.log("Line 4 .....");
