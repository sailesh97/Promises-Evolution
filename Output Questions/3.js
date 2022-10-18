console.log("Start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1); // This is synchronous code.
    console.log(3); // This is also synchronous code. 
});

promise1.then((res) => {
    console.log("Result:" + res);
});

console.log('End');

/**
 * Output:
        Start
        1
        3
        End
 */

/** As there's no resolve, .then block won't get executed  */