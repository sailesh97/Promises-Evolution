function importantAction(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Subscribe to ${username}`);
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

function any(promises) {
    let results = [];
    var counter = 0;
  
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        p.then((result) => {
          resolve(result)
        }).catch((err) => {
           results.push(err);
           ++counter;
          if (counter === promises.length) {
            reject(results);
          }
        });
      });
    });
};


any([
    importantAction("Roadside Coder"),
    likeTheVideo('Javascript Interview Questions'),
    shareTheVideo('Javascript Interview Questions')
])
    .then(res => console.log(res))
    .catch(err => console.error("Failed:",err))

Promise.any([
    importantAction("Roadside Coder"),
    likeTheVideo('Javascript Interview Questions'),
    shareTheVideo('Javascript Interview Questions')
])
    .then(res => console.log(res))
    .catch(err => console.error("Failed:",err))    

  
/**
 * Output:
 * Like the Javascript Interview Questions video
   Like the Javascript Interview Questions video
 */

/** Definition:
 * Promise.any() takes an iterable of Promise objects. 
 * It returns a single promise that fulfills as soon as any of the promises in the iterable fulfills, 
 * with the value of the fulfilled promise.
 * If no promises in the iterable fulfill (if all of the given promises are rejected), 
 * then the returned promise is rejected with an AggregateError, 
 * a new subclass of Error that groups together individual errors.
 */