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

const result = async () => {
    try{
        const message1 = await importantAction("Roadside Coder");
        console.log(message1)
        const message2 = await likeTheVideo("Javascript Interview Questions");
        console.log(message2)
        const message3 = await shareTheVideo("Javascript Interview Questions");
        console.log(message3)
    } catch(error){
        console.error("Promises Failed", error);
    }
}

result();

console.log("Stop");

/* 
Output:
    Start
    Stop
    Subscribe to Roadside Coder
    Promises Failed Like the Javascript Interview Questions video
        result @ 9 async-await.js:38
        await in result (async)
        (anonymous) @ 9 async-await.js:42
*/