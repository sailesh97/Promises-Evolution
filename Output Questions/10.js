// Qs: Resolve array of promises using recursion.

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

function promRecursive(promiseArray){
    if(promiseArray.length === 0) return;

    let currentPromise = promiseArray.shift();

    currentPromise.then(res => console.log(res));

    promRecursive(promiseArray);
}

promRecursive([importantAction('Roadside Coder'), likeTheVideo('Javascript Interview Questions'), shareTheVideo('Javascript Interview Questions')]);

/**
 * Output:
 *      Like the Javascript Interview Questions video
        Share the Javascript Interview Questions video
        Subscribe to Roadside Coder
 */