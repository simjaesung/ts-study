function neverEx1(){
    while ( true ) {
        console.log(123)
    }
}

function neverEx2(param : string){
    if(typeof param === "string") param + 1;
    else param -1;
}

let neverArr = [];