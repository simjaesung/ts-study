### **null & undefined 체크하는 법**

null & undefined 는 `&&` 기호를 통해 쉽게 체킹이 가능하다.

바로 and 연산자로 모두 참이어야 참으로 판별해주는데,

해당 원리를 이용하여 null & undefined 을 쉽게 판별할 수 있다.

불필요한 타입 체킹이긴 하지만..

```tsx
const func1 = (param : string | undefined) =>{
    if(param && typeof param === "string"){} // 간단하게 undefined 검사 가능
}
```

<br/>

### in 연산자로 object 자료 narrowing

객체들이 유니크한 속성을 가지고 있을 때 간단하게 in 연산자로 narrowing이 가능하다.

`if (키값 in object자료형)` 으로 쉽게 말이다.

```tsx
type Fish = { swim: string };
type Bird = { fly: string };

const func2 = (param : Fish | Bird) => {
    if("swim" in param){}
    if("fiy" in param){}
}
```

이때 필히 객체 별 유니크한 속성이 있어야한다.

중복 속성이 있을 경우에는 해당 방식이 쓸모가 없어진다.

<br/>

### **class로부터 생산된 object라면 instanceof로 narrowing**

클래스로부터 생성된 객체들은 **instanceof 키워드로 쉽게 narrowing이 가능하다.**

instanceof 키워드는 해당 객체의 부모 클래스가 어떤 것인지 검사해주는 키워드이다.

```tsx
let date = new Date();
let pp = new AudioNode();
const func3 = (param : Date | AudioNode) => {
    if(param instanceof AudioNode){}
    if(param instanceof Date){}
}
```

이렇게 instanceof로도 narrowing이 가능하다.

<br/>

### narrowing 이 쉽도록 도와주는 literal type

object들을 구분할 일이 많을 때 literal type을 사용하면 각 object들을 쉽게 구별이 가능하다.

```tsx
type Cars = {
    wheel : '4개',
}
type Bike = {
    wheel : '2개',
}
type Human = {
    wheel : '0개',
}

const func4 = (param : Cars | Bike | Human) => {
    if(param.wheel === '4개'){}
    else if(param.wheel === '2개'){}
    else if(param.wheel === '0개'){}
}
```

객체들의 속성이 모두 동일하기에 in 연산자로 narrowing을 하기에는 힘들어 보인다.

객체들이 각각 유니크한 속성을 가지고 있지 않을 때 해당 방법을 사용하면 좋을 것 같다.