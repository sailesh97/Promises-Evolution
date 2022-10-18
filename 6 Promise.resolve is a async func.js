console.log("Start");

const sub = Promise.resolve("Subscribe to Roadside Coder");
// const sub = Promise.reject("Subscribe to Roadside Coder");
console.log(sub);
sub.then(res => console.log(res))
.catch(err => console.log(err));

console.log("Stop")