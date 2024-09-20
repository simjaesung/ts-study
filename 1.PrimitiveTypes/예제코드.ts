//ts -> js 변환을 위해 터미널에 tsc -w

//변수만들 떄 타입 지정 가능
//string, number, boolean null, [], ...등등
let myName1 : string = "sim";
let a : string[] = ["k","B"];
let aa : number[] = [1,2,3];
let b : {age : number} = {age : 10};

//age 가 있으나 없으나 선언 가능
let c : {age? : number} = {};

//유니온 타입
let myName3 : string | number = "sim";

//타입 alias, 타입을 변수화할떄는 대문자 시작으로
type MyType = string | number;
let myName2 : MyType = "sim";
myName2 = 123;
console.log(myName2);

//함수는 파라미터도 리턴값도 체킹해줄 수 있음
function func(x:number) : number{
    return x;
}

//배열 타입
type ArrayType = [number,string];
let k : ArrayType = [123,"1234"];

//객체타입
type ObjType = {name : string};
let p : ObjType = {name : "sim"};

//모든 객체 속성 타입 지정
type Member = {[key:string]: string};
let mm : Member = {name : "kim"};

//클래스 문법
class User {
    name : string;
    age : number;
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
}

//하지만 대부분 타입은 자동으로 지정해준다.
let testString = "sim";
//testString에 별도의 타입을 지정해주지 않았는데도 에러가 나는 모습
//testString = 1234; //error

//이것들은 자동으로 타입이 지정된다.
let myName = "simjaesung";
let myAge = 27;
let home;
home = "남양주";
home = 1234;

//간단한 object 타입 만들어보기
let mySing : {title : string, singer : string} = {title : "124", singer : "123"};
console.log(mySing);

let project : {
    member : string[],
    days : number,
    started : boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}

console.log(project);