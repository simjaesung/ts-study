type Animal = number | string | number[];
//보통 파스칼케이스를 사용한다
let animals: Animal[] = [1,"dog",[1,2,3]];

type human = {
    name: string,
    age: number
}

let teacher : human = {name : "선생",age : 20};


type dog = {
    readonly name: string
}

let myDog : dog = {
    name : "심숑"
}

//myDog.name = "임숑"; error

type Square = {
    color? : string,
    width : number,
}

let 네모2 :Square = {
    width : 100
}

type Name = string;
// Name = number; => 재정의 불가능하다
type Age = number;
type NewOne = Name | Age; //키워드 여러개 합친거

type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY //extend한다고 표현한다.
let loc :XandY = { x : 1, y : 2 }


//hw1
type t1 = {name : string};
type t2 = {name : number};
type t1t2 = t1 & t2; //존재할 수 없는 타입으로 정의된다.

// const tt1 : t1t2 = {name : "wotjd"} error
// const tt2 : t1t2 = {name : 12} error
//console.log(tt1,tt2);


//hw2
type hw2 = {color? :string, size : number, readonly position : number[]};

//hw3
type hw3 = {name : string, phone : number | string, email : string};

//hw4
type hw4 = hw3 & {isAdult : boolean};

