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
    const message1 = await importantAction("Roadside Coder");
    const message2 = await likeTheVideo("Javascript Interview Questions");
    const message3 = await shareTheVideo("Javascript Interview Questions");

    console.log({message1, message2, message3})
}

result();

console.log("Stop");

/* 
Output:
    Start
    Stop
    Uncaught (in promise) Like the Javascript Interview Questions video    
*/
