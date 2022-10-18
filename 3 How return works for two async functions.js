function asynch1(){
    let message, user;
    setTimeout(() => {
        message = 'Hello';
        user = 'Sailesh';
    },2000);
    return message + " " + user;
}

function asynch2(message){
    console.log(message);
}

const message = asynch1();
asynch2(message)

// Output : undefined undefined in asynch1
// Will use callbacks to solve this problem in next file