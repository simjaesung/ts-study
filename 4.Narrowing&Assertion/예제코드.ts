//Type Narrowing 방법
// 1. if문과 typeof 원시 타입을 확인할 떄 적절한 방법

function func1 (n : number | string) {
    if(typeof n === "number") return n + 1;
    else return n + '1';
    //else가 없으면 에러가 발생할 수 있다.
}

//2. in 키워드 -> number, string과 같은 원시 타입을 확인할 떄는 적절하지 않은 방법
// function func2 (n : number | string) {
//     //
// }


//3. instanceof 키워드 -> number, string과 같은 원시 타입을 확인할 떄는 적절하지 않은 방법
// function func3 (n : number | string) {
//
// }


//Type Assertion 방법 : 덮어씌우는 방법, 컴파일러를 속임
function func2 (n : number | string) {
    return n as number * 2;
}

console.log(func2(2));

//그래서 as 문법은 이럴 때 쓰도록 합시다.
//1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
//2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때

//hw
function hw1(arr : (number | string)[]) : number[]{
    return arr.map((item) => +item);
}

console.log(hw1([1,'2',3]));


function hw2(obj :{subject : string [] | string}) : string {
    if(typeof obj["subject"] === "string") return obj["subject"];
    else if(Array.isArray(obj["subject"])) return obj["subject"][obj["subject"].length - 1];
    else return "오류";
}

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

console.log(hw2(철수쌤));
console.log(hw2(영희쌤));
console.log(hw2(민수쌤));

