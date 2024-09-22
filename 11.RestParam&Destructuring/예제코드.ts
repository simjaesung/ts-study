const add = (...args : number[]) : number => {
    return args.reduce((acc,cur)=>acc + cur);
}

console.log(add(1,2,3,4,5));

//rest 파라미터랑 spread 연산자랑은 다르다
let arr1 = [1,2,3];
let arr2 = [1,2,3];
let arr3 = [...arr1,...arr2];

//destructing
//let {name ,age} = {name :"재성",age : 22};
let [a,b] = [1,2];
type human = {name : string, age : number};
const funcs = ({name,age} : human) => {
    console.log(name,age);
}

let aasdasd : human = {
    name : "asd",
    age : 2213
}

let {name ,age} = aasdasd;
console.log(name,age);

funcs(aasdasd);

//숫자 여러개를 입력하면 최댓값을 return 해주는 함수
const returnMax = (getVal = x => x) => (...args : number[]) : number => {
    return args.reduce((max,cur) =>
        getVal(cur) > getVal(max) ? cur : max
    );
}

console.log(returnMax()(1,2,3,4,5,6));

const objects = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.2 }
];

console.log(returnMax(obj => obj.price)(objects));

//object 자료를 파라미터로 입력할 수 있는 함수
type tmp2 = { user : string, comment : number[], admin : boolean }
const func2 = ({user,comment,admin} : tmp2) :void => {
    console.log(user,comment,admin);
}
func2({ user : 'kim', comment : [3,5,4], admin : false });


const func3 = ([a,b,c] : (number|string|boolean)[]) : void=> {
    console.log(a,b,c);
}

func3([40, 'wine', false]);
