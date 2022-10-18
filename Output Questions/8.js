// Qs: Create two promise and resolve the 1st promise inside 2nd promise


const firstPromise = new Promise((resolve, reject) => {
    resolve("first");
})

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
});

secondPromise.then((res) => {
    return res;
}).then(res => {
    console.log(res);
});

/**
 * Output:
 *      first
 */