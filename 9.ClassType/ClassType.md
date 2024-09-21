### **필드 값 타입지정**

필드 값의 타입을 논하기 전, 필드 값이란 무엇일까?

필드 값이란, **클래스에 포함된 변수(variable)**를 뜻한다.

```tsx
class Person {
  data = 0;
}

let john = new Person();
let kim = new Person();

console.log(john.data); //0
console.log(kim.data); //0
```

Person 클래스에 `data = 0;` 이라는 필드 값을 선언하였고,

해당 클래스로 부터 생성된 john과 kim이 해당 필드 값을 사용할 수 있는 것을 볼 수 있다.

**필드 값에도 타입 지정이 가능하다.**

```tsx
class Person {
  data : number = 0;
}
```

이렇게 타입을 지정해도 되지만, 똑똑한 컴파일러 덕분에 굳이 타입을 명시하지 않아도 되긴 하다.

<br/>

### **constructor 타입지정**

```tsx
class Person {
  constructor (){
    this.name = 'kim';
    this.age = 20;
  }
}
//error
```

대게 js에서 class를 선언할 때 위와 같이 constructor 클래스 필드를 초기화 시키는데,

이는 ts에서 error를 발생시킨다.

`Error : Property 'name' does not exist on type 'Person'`

```tsx
class Person {
  name;
  age;
  constructor (){
    this.name = 'kim';
    this.age = 20;
  }
}
```

ts에서는 위와 같이 필드를 클래스 내부 최상단에 미리 선언을 해줘야한다.

그렇다면 name 속성에는 무조건 string 타입만이 들어오게 하고 싶다면?

```tsx
class Person {
  name;
  age;
  constructor (name : string){
    this.name = name;
    this.age = 20;
  }
}
```

파라미터에 타입을 지정하는 방법이 있고

```tsx
class Person {
  name;
  age;
  constructor ( a = 'kim' ){
    this.name = a;
    this.age = 20;
  }
}
```

필요에 따라 `default parameter` 를 사용해줄 수 있다.

그리고 굳이 필드를 선언할 때 타입을 지정해줄 필요는 없다.

<br/>

### **methods 타입지정**

class 내부의 method들의 타입은 어떻게 지정해줄까?

별거 없다. 그냥 기존 함수에 타입을 지정하듯 똑같이 해주면 된다.

```tsx
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
   
    get Name() : string {
        return this.name;
    }

    addName(str : string) : string{
        return this.name + str;
    }
}
```

getter, setter도 크게 다를 건 없다.

<br/>

### **실습**

문자, 숫자로만 이루어진 파라미터가 개수 제한이 없이 들어갈 때

해당 파라미터들을 생성자에서 분류하는 클래스 만들어보기

**실행 결과**

```tsx
let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']
```

<br/>

**생성한 코드**

```tsx
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
}
```

- 개수 제한이 없는 파라미터 : `…args`
    - 해당 파라미터는 문자, 숫자로만 이루어져 있음 : `(number|string)[]`
- 필드 값의 속성을 각각 타입의 배열로 만들어두고 객체 생성 시 분류하도록 생성