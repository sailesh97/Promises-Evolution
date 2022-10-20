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
            reject(`Share the ${video} video`)
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
    .catch(err => console.error("Failed:",err))


Promise.all([
    importantAction("Roadside Coder"),
    likeTheVideo('Javascript Interview Questions'),
    shareTheVideo('Javascript Interview Questions')
])
    .then(res => console.log(res))
    .catch(err => console.error("Failed:",err))    

/**
 * Output:
 *  Failed: Share the Javascript Interview Questions video
        (anonymous) @ Pomise_all_polyfil.js:54
        Promise.catch (async)
        (anonymous) @ Pomise_all_polyfil.js:54

 Failed: Share the Javascript Interview Questions video
 */