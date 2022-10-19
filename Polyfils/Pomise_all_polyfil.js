function importantAction(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        },1000);
    })
}

function likeTheVideo(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the ${video} video`)
        }, 100);
    })
}

function shareTheVideo(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share the ${video} video`)
        }, 500);
    })
}

Promise.allPolyfill = (promiseArray) => {
    return new Promise((resolve, reject) => {
        const outputs = [];
        
        if(!promiseArray.length){
            resolve(outputs);
            return;
        }

        let pending = promiseArray.length;
        promiseArray.forEach((promise, idx) => {
            Promise.resolve(promise).then((res) => {
                outputs[idx] = res;
                pending--;

                if(pending === 0){
                    resolve(outputs)
                }
            }, reject)
        });
    })
}

Promise.allPolyfill([
    importantAction("Roadside Coder"),
    likeTheVideo('Javascript Interview Questions'),
    shareTheVideo('Javascript Interview Questions')
])
    .then(res => console.log(res))
    .catch(err => console.log(err))


Promise.all([
    importantAction("Roadside Coder"),
    likeTheVideo('Javascript Interview Questions'),
    shareTheVideo('Javascript Interview Questions')
])
.then(res => console.log(res))
.catch(err => console.log(err))
    