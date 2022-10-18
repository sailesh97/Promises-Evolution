// More realistic example

console.log("Start")

function importantAction(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        },0);
    })
}

function likeTheVideo(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the ${video} video`)
        }, 1000);
    })
}

function shareTheVideo(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share the ${video} video`)
        }, 1000);
    })
}


// Promise HELL

importantAction("Roadside Coder")
    .then((res) => {
        console.log(res);
        likeTheVideo("Javascript Interview Questions").then((res) => {
            console.log(res);
            shareTheVideo("Javascript Interview Questions").then((res) => {
                console.log(res);
            })
        }) 
    })
    .catch((err) => console.log(err));

console.log("Stop");

