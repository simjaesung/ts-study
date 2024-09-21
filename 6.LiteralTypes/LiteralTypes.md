### Literal type

const보다 더 넓은 범위를 가지고 있는 거라고 생각하면 된다.

이전에 변수에 타입을 지정했던 것과 같이, 해당 변수에 할당될 수 있는 값을 미리 정할 수 있다.

```tsx
let john :'kim';
let kim :'john';
```

위와 같이 선언하는 경우 : 이제 john은 kim만, kim은 john만 할당할 수 있게 된다.

이와 같이 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입을 **`literal type`** 이라고 부른다.

```tsx
let direct : 'left' | 'right';
direct = 'left';
```

`or` 기호도 사용이 가능하다.

```tsx
function func(a : 'hello') : 1|0|-1 {
	return 1;
}
```

<br/>

함수에서도 사용방법이 같다.

해당 함수는 어떻게 만들까?

- '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고
- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있다.
- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능하다.

```tsx
function func(a :'가위'|'바위'|'보') : ('가위'|'바위'|'보')[]{
	return ['가위', '보', '가위'];
}
```

<br/>

**const 대용품 ?**

변하면 안되지만 변할 수도 있는 변수가 필요할 때 const 대신 Literal type을 쓰는 것도 좋아보인다.

<br/>


### **as const 문법**

```tsx
let k = {
  name : 'kim'
}

function func(a : 'kim') {

}
func(k.name) //error 발생
```

k.name이 ‘kim’임에도 불구하고 상단 코드는 에러가 발생한다.

‘kim’ 타입과  ‘kim’ 문자열은 엄연히 다른 것이기 때문이다.

이를 해결하는 방법은 여러가지가 있다.

1. object의 속성값을 잘 정하기 : 타입을 ‘kim’으로 명시해주면 오류가 발생하지 않는다.

    ```tsx
    interface K {
        name : 'kim';
    }
    
    let ttmp : K = {
        name : 'kim'
    }
    
    const f = (a : 'kim') => {
        console.log(a);
    }
    
    f(ttmp.name)
    ```

2. assertion 사용하기

    ```tsx
    let ttmp= {
        name : 'kim'
    }
    
    const f = (a : 'kim') => {
        console.log(a);
    }
    
    f(ttmp.name as 'kim');
    ```

3. 그리고 `as const` 사용하기

    ```tsx
    let k = {
      name : 'kim'
    } as const;
    
    function func(a : 'kim') {
    
    }
    func(k.name);
    ```

<br/>


**`as const` 의 효과**

1. 타입을 object의 value로 바꿔준다. (타입 자체를 'kim'으로 바꿔준다.)
2. object안에 있는 모든 속성을 readonly로 바꿔줍니다 (변경하면 에러가 발생한다.)

따라서 앞으로 object를 잠그고 싶으면 `as const` 를 활용해보도록 하자.