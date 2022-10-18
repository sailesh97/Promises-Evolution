console.log('start');

const sub = new Promise((resolve2, reject2) => {
    setTimeout(() => {
      const result = true;  
      if(result) resolve2("Subscribe to Roadside Coder");
      else reject2(new Error("Why aren't you subscribe to Roadside Coder?"));
    }, 2000);
});

console.log(sub)

sub.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err);
})

console.log('stop');

/* Problems solved by Promise:
    1. Inversion of control
    2. Reduce lengthy code horizontally
    3. Separation of concerns
*/
