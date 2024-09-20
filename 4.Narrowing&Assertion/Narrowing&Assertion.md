### 에러를 해결해보자

```tsx
function func(x : number | string){
	return x + 1; //error 발생
}
```

이를 실행하면 하단 에러가 발생한다.

`Operator '+' cannot be applied to types 'string | number' and 'number’`

해당 파라미터가 어떤 타입인지 확실하게 명시해주지 않아 발생한 문제이다.

이를 해결하는 방법은 2가지가 존재한다.

1. Type Narrowing
2. Type Assert

<br/>

### Type Narrowing

```tsx
function func(x :number | string){
  if (typeof x === 'number') {
    return x + 1
  } 
  else if (typeof x === 'string') {
    return x + 1
  }
  else {
    return 0
  }
}
```

`typeof` 를 통해 해당 변수의 타입이 어떠한건지 체크를 하고 그에 맞는 코드를 수행하는 방식이 바로 **Type Narrowing** 이다.

타입스크립트는 타입 애매한 걸 싫어하기에 이를 필수적으로 이행해야한다.

타입이 확실하지 않을 때 생기는 부작용을 막기위한 장치라고 봐도 좋을 것 같다.


그리고 이를 `"defensive 하게 코딩한다”` 라고 한다기도 한다.

typeof 가 아니더라도 타입을 하나로 확정지을 수 있는 코드라면 Narrowing 으로 사용할 수 있다.

더불어 in, instanceof 키워드도 사용할 수 있다.

<br/>

### **Type Assertion**

assertion 을 표현하면 아래와 같다.

> "이 변수의 타입을 number로 생각해주세요”
>

이렇게하면 타입스크립트가 number로 생각해준다.

```tsx
function func(x : number | string){
	return (x as number) + 1;
}
```

위와 같이 하면, x를 number라고 생각해주세요 ~ 하는 것이고

이를 컴파일러가 number로 인식해준다.

하지만 이를 사용하기 위해선 해당 변수가 무조건 number이어야 한다는 점을 잊지말자.

<br/>

### **as 키워드에 대해 더 알아보자.**

1. as 키워드는 union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할을 수행한다.
    - number as string 이런거는 안된다는 말이다.
2. 실제 타입을 바꿔주는 것 또한 아니다.
    - 상단 `func` 에서 `func(’124’)` 이라고 호출했다고 가정하자.
    - 결과는? ‘1241’ 이다. 왜? ⇒ string을 number로 바꿔주는게 아니기 때문이다.

as는 간편해보인다. 하지만 이는 엄격한 타입스크립트를 피해가는 방법일 뿐이다.

그래서 되도록이면 narrowing을 사용하도록 하자.

<br/>

**그리고 as는 이럴때만 써보도록 하자.**

1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때

<br/>

### **as 키워드가 유용하게 사용될 때**

가끔 타입을 강제로 부여하고 싶을 때, 함수에 데이터를 넣으면 as 타입명을 붙여서 return 하는 함수를 만들어서 사용하면 된다.

```tsx
type Person = {
    name : string
}
function 변환기<T>(data: string): T {
    return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"kim"}');
```

이 함수에 자료를 입력하면 as 키워드로 타입을 하나 붙여준다.