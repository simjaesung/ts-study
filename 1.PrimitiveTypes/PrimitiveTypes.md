### 타입은 여러가지 존재한다.

```jsx
let myName1 : string = "sim";
let age :number = 20;
let married :boolean = false;
```

`*string, number, boolean null, [], ...등등` 존재한다.*

`null`이랑 `undefined`도 존재하는데 이는 사용하지는 않는다.

<br/>

### Array & Object

위에서 언급했듯, **array 또는 object 자료 안에도 타입 지정이 가능하다.**

```jsx
let a : string[] = ["k","B"];
let aa : number[] = [1,2,3];
let b : {age : number} = {age : 10};
```

`array` : 지정한 타입 외의 값을 작성할 수 없다.

`object` : 내가 만들 key : value 의 타입을 모두 지정해줄 수 있다.

```jsx
type Member = {[key:string]: string};
let mm : Member = {name : "kim"};
```

```jsx
let project : {
    member : string[],
    days : number,
    started : boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}

```

하지만 이렇게 object내에 타입을 지정하면 너무 변수가 길어진다.

이는 나중에 type를 변수로 뺄 수 있는 부분에서 해결이 가능하다.

<br/>

### Class

```jsx
//클래스 문법
class User {
    name : string;
    age : number;
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
}
```

클래스에서도 타입 지정이 가능하지만, constructor에서 사용하려면 저렇게 미리 선언해줘야한다.

<br/>

### 오류 발생

```jsx
let name : string = 'kim';
name = 30;
```

**`Type 'number' is not assignable to type 'string'.(2322)`**

이렇게 다른 타입을 할당하려하면 오류가 발생한다.

<br/>

### 자동 타입 할당

하지만 일일이 타입을 지정해주지 않아도 자동으로 타입을 지정해준다.

<img width="426" alt="image" src="https://github.com/user-attachments/assets/0df86f61-874e-4335-8afc-d16e4d724e07">

<img width="431" alt="image" src="https://github.com/user-attachments/assets/79fddc2e-0a10-40cc-bb47-84941aaa63b6">

그리고 선언만해두고 할당해주지 않으면 어떻게 될지 살펴보자

<img width="428" alt="image" src="https://github.com/user-attachments/assets/0cefd9a8-55ec-4322-81f6-aad99137c3b8">

any로 되는 것을 볼 수 있다.