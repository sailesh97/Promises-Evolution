/**
 * Qs: Rewrite the below example code using async await instead of then/catch
 */
/* 
function loadJson(url) {
    return fetch(url).then((response) => {
        if(response.status === 200){
            return response.json();
        } else{
            throw new Error(response.status);
        }
    });
    
}
loadJson("https://jsonplaceholder.typicode.com/todos/1").then(data => console.log(data)).catch((err) => console.log(err));
 */

async function loadJson(url) {
    let response = await fetch(url);
    if(response.status == 200){
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}

loadJson("https://jsonplaceholder.typicode.com/todos/1").then(data => console.log(data)).catch((err) => console.log(err));