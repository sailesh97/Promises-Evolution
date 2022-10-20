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

function allSettled(promises) {
    let mappedPromises = promises.map((p) => {
      return p.then((value) => { // returns new promise that gets returned from .then/.catch
          return { // return inside .then or .catch returns a new promise
            status: 'fulfilled',
            value,
          };
        })
        .catch((reason) => {
          return {
            status: 'rejected',
            reason,
          };
        });
    });
    // all promises of promiseArray irrespective of it's resolved or rejected will return an object with status and value/reason key.
    console.log('Mapped promise: ', mappedPromises); // Array of promises
    return Promise.all(mappedPromises); 
};

allSettled([
    importantAction("Roadside Coder"),
    likeTheVideo('Javascript Interview Questions'),
    shareTheVideo('Javascript Interview Questions')
])
    .then(res => console.log(res))
    .catch(err => console.error("Failed:",err))

Promise.allSettled([
    importantAction("Roadside Coder"),
    likeTheVideo('Javascript Interview Questions'),
    shareTheVideo('Javascript Interview Questions')
])
    .then(res => console.log(res))
    .catch(err => console.error("Failed:",err))    

/**
 * Output:
 * [
        {
            "status": "fulfilled",
            "value": "Subscribe to Roadside Coder"
        },
        {
            "status": "fulfilled",
            "value": "Like the Javascript Interview Questions video"
        },
        {
            "status": "rejected",
            "reason": "Share the Javascript Interview Questions video"
        }
    ]

    [
        {
            "status": "fulfilled",
            "value": "Subscribe to Roadside Coder"
        },
        {
            "status": "fulfilled",
            "value": "Like the Javascript Interview Questions video"
        },
        {
            "status": "rejected",
            "reason": "Share the Javascript Interview Questions video"
        }
    ]
 */


/**
 * Definition:
 *  The Promise.allSettled() method returns a promise that fulfills 
 * after all of the given promises have either fulfilled or rejected, 
 * with an array of objects that each describes the outcome of each promise.

    It is typically used when you have multiple asynchronous tasks 
    that are not dependent on one another to complete successfully, 
    or you'd always like to know the result of each promise.

    In comparison, the Promise returned by Promise.all() may be more appropriate 
    if the tasks are dependent on each other / if you'd like to immediately reject upon any of them rejecting.
 */