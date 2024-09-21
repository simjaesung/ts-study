### **function type**

함수 타입도 type alias로 저장해서 사용이 가능하다.

이때, 화살표 함수가 이용된다.

```tsx
type NumOut = (x : number, y : number ) => number ;
```

이런 방식으로 함수 타입을 지정할 수 있다.

해당 함수 타입을 사용하는 방법도 똑같다.

```tsx
let sum : NumOut = (x,y) => {
	return x + y;
}
```

파리미터의 타입 지정과 리턴 타입 지정 부분이 생략 됨을 볼 수 있다.

<br/>

### **methods type**

object 자료 내부의 함수인 method에도 역시 타입을 지정해줄 수 있다.

```tsx
type Infor = {
    name : string;
    plusOne : (x : number) => number,
    getName : () => void,
    sayHello : () => void
}

const infor : Infor = {
    name : 'sim',
    plusOne(x){
        return x + 1;
    },
    getName (){
        console.log(this.name);
    },
    sayHello(){
        console.log("hello!");
    }
}
```

object의 타입을 지정하고 이에 맞는 object를 만들어주면 된다.

<br/>

### 실습

**간단한 문자를 제거하는 함수의 타입을 정의하고 함수 작성해보기**

- `cutZero()` : 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return
- `removeDash()` : 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return

```tsx
type CutZero = (x : string) => string;
type RemoveDash = (x : string) => number;

function cutZero : CutZero = (str) => {
	return str.replace(/^0+/,"");
}

function removeDash : RemoveDash = (str) => {
	let result = str.replace(/-/g,"");
	return parseInt(result);
}
```

**함수를 파라미터로 가진 함수의 타입 지정해보기**

- 첫째는 문자, 둘째는 함수, 셋째는 함수
- 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입 지정하기

```tsx
type Func = (a : string, b : CutZero, c : RemoveDash) => number;

let func : Func = (str, f1, f2) => {
	return f2(f1(str));
}

console.log(func('010-1111-2222', cutZero, removeDash));
```

실수 : 파라미터 부분에 함수의 타입이 아닌 함수 자체를 넣어주려했음