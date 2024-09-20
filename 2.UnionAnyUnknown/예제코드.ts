let members : (number | string) [] = [1,'2',3];
//let members : number | string[] 이렇게 하면 number or string[]
let obj : {a : string | number} = { a : 123 };

//타입스크립트 의미가 없어지는 순간, 타입 자체를 제거해버림
let any : any = "test";
any = 1234;
//any는 덧뺄셈 가능

//any대신 unknown을 사용하는 걸 권장, 타입이 존재하는 것임
let nk : unknown = 123;
nk = "asd";

// nk -= 1; error
// console.log(nk.data);
// unknown은 덧셈뺄셈 불가능

//let testNk : string = nk;
//다른 타입으로 분류되기에 다른 타입 변수에는 할당이 불가능

//number | string 은 둘다 덧셈이 가능하다.
//하지만 number | string 을 새로운 타입 자체로 판단하여 덧셈 불가
let test : number | string;
//test += 1; error


//hw
let user : string = 'kim';
let age : undefined | number = undefined;
let married : boolean = false;
let check : (string | undefined |number| boolean) [] = [user, age, married];
console.log(check);


let school :
    {
        score : (number | boolean) [],
        teacher : string,
        friend : string | string[];
    }
    = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
school.score[4] = false;
school.friend = ['Lee' , school.teacher];

console.log(school);