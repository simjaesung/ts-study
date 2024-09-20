### **타입 정의가 너무 길면 Type Alias**

```tsx
let animal :string | number | undefined;
```

매우 길고 복잡하게 타입을 나열하는 경우가 많다.

**1. 이게 길고 보기싫으면**

**2. 나중에 또 사용하고 싶으면**

변수에 담아쓰자.

변수만드는 것 처럼 `type` 이라는 키워드를 사용하면 된다.

```tsx 
type Animal = string | number | undefined;
let dog : Animal = "심숑";
```

타입을 변수처럼 만들어 쓰는 alias 문법이다.

자바스크립트에서 대게 사용하는 카밀케이스를 사용하는 변수와 차별점을 두기 위해 첫글자 시작을 대문자로 쓰도록 하자.

<br/>

### Object 또한 타입 지정이 가능하다.

```tsx
type Human = {
  name : string,
  age : number,
}

let teacher :Human = { name : 'john', age : 20 } 
```

`type` 키워드 안쓰면 이렇게 써야하는데

```tsx
let teacher :{
  name : string,
  age : number,
} = { name : 'john', age : 20 } 
```

변수 선언할 때마다 저렇게 쓰면 참 힘들고 유지보수하기에도 어렵겠다.

<br/>

### **readonly로 잠그기**

```tsx
const human = {
  name : '엠버'
}
human.name = '유라';  //const 변수지만 에러안남
```

수정이 불가능한 변수 선언 방법으로 알려져있는 const의 단점이라고 할 수 있는 점은 const로 선언한 객체 일지라도 **속성은 수정할 수 있다는 것이다.**

이를 타입스크립트로 해결이 가능하다.

```tsx
type Human = {
  readonly name : string,
}

let human : Human = {
  name : '엠버'
}

human.name = '유라' //readonly라서 에러
```

한번 부여된 후엔 앞으로 바뀌면 안될 속성들을 readonly로 잠구도록 하자.

하지만 `readonly`는 컴파일시 에러를 내는 것일 뿐 변환된 js 파일 보시면 잘 바뀌긴한다.

<br/>

### 속성 몇개가 선택사항이라면

```tsx
type Square = {
    color? : string,
    width : number,
}

let square :Square = {
    width : 100
}
```

속성 앞에 `?` 키워드를 사용하도록 하자

<br/>

### **type 키워드 여러개를 합칠 수 있다.**

OR 연산자를 이용해서 Union type을 만들 수 있다.

```tsx
type Name = string;
type Age = number;
type NewOne = Name | Age; 
```

`&` 키워드를 통해 타입 extend가 가능하다.

```tsx
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let 좌표 :XandY = { x : 1, y : 2 }
```

물론 Type alias & Type alias 만 가능한게 아니라

Type alias & { name : string } 이런 것도 가능하다.

<br/>

### **type 키워드는 재정의가 불가능하다**

```tsx
type Name = string;
type Name = number;
```

이렇게 재정의를 할 경우 에러가 발생한다.