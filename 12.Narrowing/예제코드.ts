//null & undefined narrowing

const func1 = (param : string | undefined) =>{
    if(param && typeof param === "string"){} // 간단하게 undefined 검사 가능
}

// in 연산자로 object 자료 narrowing
type Fish = { swim: string };
type Bird = { fly: string };

const func2 = (param : Fish | Bird) => {
    if("swim" in param){}
    if("fiy" in param){}
}

//class로부터 생산된 object라면 instanceof로 narrowing

let date = new Date();
let pp = new AudioNode();
const func3 = (param : Date | AudioNode) => {
    if(param instanceof AudioNode){}
    if(param instanceof Date){}
}

//narrowing 이 쉽도록 도와주는 literal type
type Cars = {
    wheel : '4개',
}
type Bike = {
    wheel : '2개',
}
type Human = {
    wheel : '0개',
}

const func4 = (param : Cars | Bike | Human) => {
    if(param.wheel === '4개'){}
    else if(param.wheel === '2개'){}
    else if(param.wheel === '0개'){}
}

console.log(Math.min(1,2));