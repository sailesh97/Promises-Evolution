// More realistic example

console.log("Start")

function importantAction(username, cb){
    setTimeout(() => {
        cb(`Subscribe to ${username}`);
    },0);
}

function likeTheVideo(video, cb){
    setTimeout(() => {
        cb(`Like the ${video} video`)
    }, 1000);
}

function shareTheVideo(video, cb){
    setTimeout(() => {
        cb(`Share the ${video} video`)
    }, 1000);
}

// CALLBACK HELL / Pyramid of DOOM
const message = importantAction("Roadside Coder", function(message){
    console.log(message);
    likeTheVideo("Javascript Interview Questions", (action) => {
        console.log(action);
        shareTheVideo('Javascript Interview Questions', action => {
            console.log(action)
        })
    });
});

console.log("Stop")

