### 함수에 타입지정은 2곳에 가능하다.

함수는 총 2군데 타입 지정이 가능하다.

1. 함수로 들어오는 자료 (파라미터)
2. 함수에서 나가는 자료 (return)

```jsx
function func(x : number) : number{
	return x * 2;
}
```

파라미터에 타입을 지정하는 순간 해당 파라미터는 필수적으로 써줘야한다.

<br/>

### 파라미터가 옵션일 경우

그럼에도 파라미터를 사용하고 싶지 않을 때가 있지 않을까?

이런 고민에 대한 기능 역시 제공이 된다.

파라미터 옆에 `?` 표시만 해주면 된다.

```tsx
function func(x? : number) : number{
	console.log("hi");
}

//둘다 사용가능하다
func();
func(2);
```

<br/>

### 함수는 void 타입을 제공한다.

void는 return할 자료가 없는 함수의 타입으로 사용이 가능하다.

```tsx
function func(x : number) : void{
	return x * 2; //error 발생
}
```

이렇게 무언가를 return 하려고하면 에러가 발생한다.

<br/>

### 함수에서 **Union type?**

```tsx
function func(x : number | string){
	return x + 1; //error 발생
}
```

자바스크립트에서는

- number + 1
- string + 1

둘다 가능한데..

타입스크립트는 엄격하기에 이 또한 에러가 발생한다.

더 더 확실해야하는 것이다.

해당 오류를 해결하는 방법에는 narrowing, assertion 등이 있다.

<br/>

### 확실하지 않은 인자에서 return?

```tsx
function func(x? number) : number{
	return x * 2; //error 발생
}
```

x가 number일 보장이 없기에 에러를 발생시킨다.