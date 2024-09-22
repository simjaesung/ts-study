### **rest parameter**

파라미터에 몇개 들어올 지 모르는 함수를 만들어야할 때 사용하는 문법이다.

```jsx
const add = (...args) => {
	return args.reduce((acc,cur)=> return acc + cur);
}
```

- rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있다. `func(a,b,…args)` 와 같이
- rest 파라미터에 넣은 값들은 [ ] 에 담겨져 있다.

<br/>

### **rest parameter type**

rest parameter의 타입을 지정하는 방법도 별반 다르지 않다.

rest 파라미터에 넣은 값들은 [ ] 에 담겨져 있기 때문에, 배열 타입을 지정하는 것과 똑같이 해주면 된다.

상단 예제 함수에 타입을 지정해보면 아래와 같다.

```jsx
const add = (...args : number[]) : number => {
	return args.reduce((acc,cur)=> return acc + cur);
}
```

<br/>

### **rest parameter  vs Spread operator**

rest parameter와 Spread operator은 똑같은 문법 형태를 가졌지만,

둘은 엄연히 다른 문법임을 잊지 말자.

```jsx
let arr = [3,4,5];
let arr2 = [1,2, ...arr]
console.log(arr2)
```

Spread operator는 array, object에 `…` 을 통해 괄호를 벗겨준다.

반면 rest parameter 은 함수 파라미터에서만 등장한다.

<br/>

### **Destructuring**

`Destructuring : 파괴하기`

단어 뜻 그대로 object 나 array의 괄호를 파괴해준다.

object의 속성을 빼기 위해 아래와 코드를 작성했다.

```jsx
let human = { student : true, age : 20 }
let student = human.student;
let age = human.age;
```

하지만 이를 Destructuring을 통해 코드를 많이 축약할 수 있다.

```jsx
let human = { student : true, age : 20 };
let { student, age } = human;
```

object destructuring할 땐 변수이름을 속성이름과 맞춰주도록 하자.

array에서 활용하는 법도 별반 다르지 않다.

```jsx
let [a,b] = [1,2];
```

이렇게 함으로써 `a = 1; b = 2;` 가 완성되는 것이다.

<br/>

### **Destructuring 문법을 함수 파라미터에서 사용이 가능하다.**

```jsx
type human = {name : string, age : number};

let aasdasd : human = {
    name : "asd",
    age : 2213
}

const funcs = ({name,age} : human) => {
    console.log(name,age);
}

funcs(aasdasd);
```

이때  object의 속성명을 일치시켜야한다는 점을 잊지말도록 하자.

<br/>

### **숫자 여러개를 입력하면 최댓값을 return 해주는 함수**

```jsx
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
```

`getVal = x => x`를 기본 매개변수로 부여하고 필요 시 이를 오버라이딩하여 함수의 활용 범위를 넓힌 고차함수이다.

<br/>

### object 자료를 파라미터로 입력할 수 있는 함수

```tsx
type tmp2 = { user : string, comment : number[], admin : boolean }
const func2 = ({user,comment,admin} : tmp2) :void => {
    console.log(user,comment,admin);
}
func2({ user : 'kim', comment : [3,5,4], admin : false });
```

<br/>

### 파라미터에서 destructuring 문법 활용하기

```tsx
type ArrParam = (number | string | boolean)[];
const func = ([a,b,c] : ArrParam) => {
	console.log(a,b,c);
}
```