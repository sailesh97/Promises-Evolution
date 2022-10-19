function PromisePolyfill(executor){
    let onResolve, onReject,
    isFulfilled = false, isRejected = false, isCalled = false, value;

    function resolve(val){
        isFulfilled = true;
        value = val;

        if(typeof onResolve === 'function'){
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(val){
        isRejected = true;
        value = val;
        if(typeof onReject === 'function'){
            onReject(val);
            called = true;
        }
    }

    this.then = function (callback){
        onResolve = callback;

        if(isFulfilled && !isCalled){
            called = true;
            onResolve(value)
        }
        return this;
    }

    this.catch = function(callback){
        
        onReject = callback;
        if(isRejected && !isCalled){
            isCalled = true;
            onReject(value)
        }
        return this;
    }
    try{
        executor(resolve, reject)
    } catch(error){
        reject(error)
    }
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
    setTimeout(() => {
        reject(2);
    }, 1000);
});

examplePromise
    .then((res) => {
        console.log(res);
    })
    .catch(err => console.error(err));