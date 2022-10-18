function asynch1(callbackFn){
    let message, user;
    setTimeout(() => {
        message = 'Hello';
        user = 'Sailesh';
        callbackFn(message + " " + user);
    },2000);
}

function asynch2(message){
    console.log(message);
}

const message = asynch1(asynch2);
