console.log("Start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1); // This is synchronous code.
    resolve(2); // This is asynchronous code, goes through microtask queue
});

promise1.then((res) => {
    console.log(res);
});

console.log('End');

/**
 * Output:
        Start
        1
        End
        2
 */