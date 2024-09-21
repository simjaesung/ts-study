//interface 는 상속을 지원한다.
interface Student {
    name: string;
}

interface Teacher extends Student {
    age: number;
}


//type에서는 intersection로 extend(?) 가능
type Animal = {
    name : string;
}
type Cat = Animal & {age : number} ;
//같은 타입을 부여할 경우 에러가 발생하지 않는다
type Dog = Animal & {name : string} ;

//interface에서 중복이 발생하는 경우 미리 에러가 발생하지 않는다.
type Dob = Animal & {name: number} ;

//type과 달리 interface는 중복 선언이 가능하다.
interface Student {
    grade : number;
    //name : number; 같은 속성을 재선언하는 것은 error가 발생한다.
}
//상단 선언한 Student에서 grade 속성이 자동으로 extend 된다.


//간단한 상품 interface 만들어보기
interface Product {
    brand : string;
    serialNumber : number;
    model : string [];
}

let p1 : Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
let p2 : Product = { brand : 'LG', serialNumber : 60, model : ['TV'] }


//object array 만들기
interface Cart {
    product : string,
    price : number
}
let bag : Cart [] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ];


//상단 타입 extends 해보기
interface NewCart extends Cart {
    card : boolean
}

//object 안에 함수 넣어보기
interface Cal{
    plus : (a : number, b: number) => number;
    minus : (a : number, b: number) => number;
}

let cal : Cal = {
    plus(x,y){
        return x + y;
    },
    minus(x,y){
        return x - y;
    }
}
console.log(cal.plus(1,2));
console.log(cal.minus(2,1));
