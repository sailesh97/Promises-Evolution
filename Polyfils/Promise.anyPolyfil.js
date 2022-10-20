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