// More realistic example

console.log("Start")

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
            reject(`Like the ${video} video`)
        }, 2000);
    })
}

function shareTheVideo(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share the ${video} video`)
        }, 500);
    })
}

Promise.race([
    importantAction("Roadside Coder"),
    likeTheVideo("Javascript Interview Questions"), 
    shareTheVideo("Javascript Interview Questions")
]).then(res => {
    console.log(res)
}).catch(err => {
    console.log("Error: Promises failed", err);
})

console.log("Stop");

/* 
Output:
    Start
    Stop
    Share the Javascript Interview Questions video
*/
