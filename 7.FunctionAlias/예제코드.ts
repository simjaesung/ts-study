//함수 타입 저장방법
type NumOut = (a: number, b:number) => number;
let funcc : NumOut = (x,y) => {
    return x+y;
}
console.log(funcc(1,2));

//object method 타입 저장방법
type Infor = {
    name : string;
    plusOne : (x : number) => number,
    getName : () => void,
    sayHello : () => void
}

const infor : Infor = {
    name : 'sim',
    plusOne(x){
        return x + 1;
    },
    getName (){
        console.log(this.name);
    },
    sayHello(){
        console.log("hello!");
    }
}

//실습
type CutZero = (x : string) => string;
type RemoveDash = (x : string) => number;

let cutZero : CutZero  = (x) =>{
    return x.replace(/^0+/, "");
}

let removeDash : RemoveDash = (x)=>{
    let result = x.replace(/-/g,"");
    return parseFloat(result);
}

//타입으로 지정한 함수를 또 타입으로 지정할 수 있다.
type CallBack = (a : string, b : CutZero, c : RemoveDash) => number;

let callBack : CallBack = (a,f1,f2)=>{
    return f2(f1(a));
}
console.log(callBack('010-1111-2222',cutZero,removeDash));