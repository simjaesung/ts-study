내가 미래를 내다보는 신도 아니고 모든 타입을 미리 정하기 좀 애매한 상황들이 있다.

### **Union type**

```jsx
let name: string | number = 'kim';
let age: (string | number) = 100;
```

- 괄호를 쳐도 무관하다.
- **할당하는 순간 타입은 둘중 한개로 변한다.**

array & object에서 union type사용하기

```jsx
let members : (number | string) [] = [1,'2',3];
let obj : {a : string | number} = { a : 123 };
```

```jsx
let members : number | string[] 
```

이렇게 하면 members는 number or string[]이 되니 주의하자.

<br/>

### any type

```jsx
let any : any = "test";
any -= 1; 
```

any는 말그래도 any, 아무 타입이나 수용하겠다는 것이다.

이러면 타입스크립트를 쓰는 의미가 없어진다.

*해당 변수의 문제점 중 하나는 -1 을 해줘도 동작이되는 것이다.*

any는 비상시 사용하는 변수 타입체크 해체 기능 용도로 사용한다고 한다.

<br/>

### unknown type

```jsx
let name: unknown = 'kim';
name = 123;
name = undefined;
name = [];
```

unknown 타입은 any 타입과 똑같이 모든 것을 집어넣을 수 있다.

위 코드처럼 작성해도 큰 오류가 없다.

하지만 `unknwon`은 그 자체로 타입이다.

```jsx
let name: unknown;

let tmp1: string = name;
let tmp2: boolean = name;
let tmp3: number = name;
```

`any`는 위와 같이하면 오류가 안나지만,

`unknown`은 위와 같은 상황에서 오류를 발생시킨다.

```jsx
let name: unknown;
name[0];
name - 1;
name.data;
```

이것도 마찬가지다.

`any`는 오류가 안나지만, `unknown`은 오류가 발생한다.

<br/>

### any vs unknown

이 둘의 차이를 명확하게 알아보자.

- `any`와 `unknown` 타입 변수를 다른 타입에 할당
    - `any`: 어떤 타입의 변수에도 할당 가능 (오류 발생 X)
    - `unknown`: 다른 타입의 변수에 직접 할당 불가 (오류 발생 O)

- 연산 및 메서드 사용
    - `any`: 모든 연산과 메서드 사용 가능 (오류 발생 X)
    - `unknown`: 연산이나 메서드 사용 시 오류 발생

- `unknown` 타입을 안전하게 사용하는 방법
    - 여기서 중요한 개념은 "타입 가드"이다.
    - `unknown` 타입의 변수를 사용하기 전에 해당 변수의 타입을 확인하고 나서 사용해야 한다.

    ```jsx
    let data: unknown = "Hello, TypeScript";
    
    if (typeof data === "string") {
      console.log(data.toUpperCase());  // 이제 안전하게 문자열 메서드 사용 가능
    }
    
    // 또는 타입 단언(type assertion)을 사용할 수 있다
    let len: number = (data as string).length;
    ```

<br/>

**정리**

- `any`는 모든 연산과 메서드 사용이 허용되지만, `unknown`은 제한된다.
- `any`는 타입 검사를 완전히 무시하므로 모든 연산이 허용되지만, 이는 타입 안정성을 해칠 수 있다.
- `unknown`은 더 안전한 타입으로, 사용하기 전에 타입을 확인해야 한다. 이는 예기치 않은 오류를 방지하는 데 도움이 된다.

<br/>

### 그래서 unknown 타입인 변수를 조작하려면

내가 조작할 변수의 타입이 무엇인지 확실하게 체크하 **narrowing 또는 assertion** 스킬을 사용해야한다.

그것이 타입스크립트의 근간이 되는 코딩방법이다.

변수에 뭐가 들어있을지 아직 모르는데 그 변수를 사용하고 조작해야하는 경우에 narrowing 또는 assertion을 반드시 사용해야 에디터가 에러를 뱉지 않는다.