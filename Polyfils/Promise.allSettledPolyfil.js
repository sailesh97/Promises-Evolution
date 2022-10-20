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
      return p.then((value) => {
          return {
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