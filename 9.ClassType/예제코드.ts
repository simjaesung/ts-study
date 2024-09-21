//constructor에서 변수를 사용하기 위해서는 필드값에 선언을 해줘야한다.
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    //constructor 에 리턴 타입은 지정하면 안된다.
    // Object 자료가 생성되는 것이기에 큰 의미가 없다.
    // default parameter 도 사용할 수 있다.
    // constructor(name: 'sim') {
    //     this.name = name;
    // }

    //그 외 메소드에는 타입을 지정해주면 된다.
    get Name() : string {
        return this.name;
    }

    addName(str : string) : string{
        return this.name + str;
    }
}

let sim = new Person("sim");
let kim = new Person("kim");
console.log(sim.name);
console.log(sim.addName("kk"));

//Car 클래스 만들어보기.
class Car{
    model : string;
    price : number;
    constructor(model : string, price : number) {
        this.model = model;
        this.price = price;
    }

    tax() : number{
        return this.price / 10;
    }
}

let car1 = new Car('소나타', 3000)
console.log(car1)
console.log(car1.tax())


//Word 클래스 만들어보기
class Word{
    str : string [];
    num : number [];
    constructor(...args : (number|string)[]) {
        this.str = [];
        this.num = [];
        args.forEach((item) => {
            if(typeof item === "string") this.str.push(item);
            else this.num.push(item);
        })
    }
    //처음에 get 방식으로 return 하려했더니 에러
    // 필드값이랑 함수명이랑 겹쳐서 그런것 같다.
    // get str(): string[] {
    //     return this.str;
    // }
    // get num() : number[]{
    //     return this.num;
    // }
}

let objs = new Word('kim', 3, 5, 'park');
console.log(objs.num) //[3,5]
console.log(objs.str) //['kim', 'park']