function PromisePolyfill(executor){
    let onResolve, onReject;

    function resolve(value){
        onResolve(value);
    }

    function reject(value){
        onReject(value);
    }

    this.then = function (callback){
        onResolve = callback;
        return this;
    }

    this.catch = function(callback){
        onReject = callback
        return this;
    }

    executor(resolve, reject)
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

examplePromise.then(() => {
    console.log(res);
}).catch(err => console.log(err));