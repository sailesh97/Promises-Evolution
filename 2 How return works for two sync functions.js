function synch1(){
    let message = 'Hello', user = 'Sailesh';
    return message + " " + user;
}

function synch2(message){
    console.log(message);
}

const message = synch1();
synch2(message)