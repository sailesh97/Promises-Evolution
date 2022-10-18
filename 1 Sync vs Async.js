// Sync
function synch(){
    console.log("****** Sync code start ********")
    console.log("Start...")
    console.log("Subscribe to Roadside coder")
    console.log("Stop...")
    console.log("****** Sync code end ********")
}

function asynch(){
    console.log("****** Async code start ********")
    console.log('Start')
    setTimeout(() => {
        console.log("Subscribe to Roadside coder")
    }, 3000)
    console.log('End')
    console.log("****** Async code end ********")
}

synch()
asynch()