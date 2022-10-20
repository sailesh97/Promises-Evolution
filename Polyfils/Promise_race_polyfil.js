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

function promiseRace(promisesArray) {
    return new Promise((resolve, reject) => {
      promisesArray.forEach((promise) => {
        promise
          .then(resolve) // resolve outer promise, as and when any of the input promise resolves
          .catch(reject); // reject outer promise, as and when any of the input promise rejects
      });
    });
}
  
promiseRace([
    importantAction("Roadside Coder"),
    likeTheVideo('Javascript Interview Questions'),
    shareTheVideo('Javascript Interview Questions')
])
    .then(res => console.log(res))
    .catch(err => console.error("Failed:",err)) 

Promise.race([
    importantAction("Roadside Coder"),
    likeTheVideo('Javascript Interview Questions'),
    shareTheVideo('Javascript Interview Questions')
])
    .then(res => console.log(res))
    .catch(err => console.error("Failed:",err)) 

/**
 * Output:
 *  Like the Javascript Interview Questions video
    Like the Javascript Interview Questions video
 */