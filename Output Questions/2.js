console.log("Start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1); // This is synchronous code.
    resolve(2); // This is asynchronous code, goes through microtask queue
    console.log(3); // This is also synchronous code. 
});

promise1.then((res) => {
    console.log(res);
});

console.log('End');

/**
 * Output:
        Start
        1
        3
        End
        2
 */