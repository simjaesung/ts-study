function testFunc(x : number) : number {
    return x * 2;
}

//리턴하고싶지 않을 떄는 void 타입을 작성하면된다.
function test2Func(x: number) : void {
    console.log(x);
    //return x * 2; //error
}

//파라미터의 타입을 지정하면 무조건 함수 사용 시 이를 써줘여한다.
//하지만 옵션을 주고싶으면 ? 을 사용하면 된다.
 function test3Func(x?: number) : void {
    //이때 x는 x : number | undefined 이라고한다.
    //console.log(x * 2); //그래서 number처럼 대하려고하면 에러가 발생한다.
     //Narrowing을 사용한다고하면 된다는데..
 }

 //hw
function hw1Func(name? : string) : void {
    if(name) console.log(`안녕하세요 ${name}`);
    else console.log(`이름이 없습니다.`);
}

hw1Func("홍길동");
hw1Func();

function hw2Func(param : number | string) : number {
    //string이 들어와도 그냥 toString 해주면 된다.
    return param.toString().length;
}

console.log(hw2Func(1234));
console.log(hw2Func("1234"));

function hw3Func(money : number, home : boolean, attractiveness : string) : string | void{
    let score : number = 0;
    score += money;
    if(home) score += 500;
    if(attractiveness === "상") score += 100;
    if(score >= 600) return "결혼가능";
}
console.log(hw3Func(700, false, '중'));
console.log(hw3Func(100, false, '상'));