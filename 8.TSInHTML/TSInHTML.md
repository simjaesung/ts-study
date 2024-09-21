### **strictNullCheck**

null이 들어오는 경우를 체크해주기 위해서는 해당 **strictNullCheck** 옵션을 켜줘야한다.

```tsx
let title = document.getElementById("title");
title.innerHTML = "hi";
```

해당 옵션을 키면 `title.innerHTML = "hi";` 부분에 오류가 발생한다.

왜? title이라는 Id를 가진 element가 존재하지 않을 수 있기 때문이다.

하지만 해당 옵션을 끄면 오류가 발생하지 않는다.

타입스크립트를 제대로 사용하려면 해당 옵션을 키도록 하자.

옵션을 설정하기 위해서는 `tsconfig.json` 을 수정하면 된다.

```tsx
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true
  }
}
```

`"strict": true` 해당 옵션을 키면 strictNullCheck이 자동으로 켜진다.

<br/>

### HTML 조작하기

```html
<h4 id="title">안녕하세요</h4>
<a href="naver.com" id="link">링크</a>
<button id="button">버튼</button>
<script src="변환된 자바스크립트파일.js"></script>
```

해당 html 파일이 있다고 가정하고 하단 실습을 진행해보자.

```tsx
let title = document.getElementById("title");
title.innerHTML = "hi"; //error
```

앞서 **strictNullCheck** 옵션을 켜줬다면 해당 부분에서 error가 발생한다.

이는 title이 null 혹은 element이기 때문이다.

즉, `document.getElementById` 를 통해 가져온 것의 타입이 불명확하다는 것이다.

<br/>

**해결책**

해당 문제를 해결하는 방법은 앞서 배운 내용들과 일맥 상통한다.

1. **narrowing**(null or Element)

    ```tsx
    if(title) title.innerHTML = "hi";
    ```

   비교적 쉽게 title의 타입을 확인해줄 수 있다.

    <br/>

2. `instanceof`

    ```tsx
    if(title instanceof Element) title.innerHTML = "hi";
    ```

   instanceof 연산자를 통해 타입을 더 명확하게 확인해줄 수 있다.

<br/>

3. as로 강제형변환

    ```tsx
    let title = document.getElementById("title") as Element;
    title.innerHTML = "hi";
    ```

   as는 어찌보면 컴파일러를 속이는 방식이니, 사용을 지양하도록 하자.

   <br/>

4. optional chaining 연산자

    ```tsx
    if(title?.innerHTML) title.innerHTML = "hi";
    ```

   title 객체 속성에 innerHTML 이 존재하는 경우 그것을 사용, 그렇지 않으면 undefined를 남겨주는 방법이다.

<br/>

### href 링크 변경해보기

```tsx
let link = document.getElementById("link");
if(link instanceof Element) link.href = "google.com"; //error
```

해당 코드는 에러가난다.

Element 타입은 너무나도 광범위하기에 해당 타입에는 link 속성이 들어있지 않기 때문이다.

```tsx
let link = document.getElementById("link");
if(link instanceof HTMLAnchorElement) link.href = "google.com";
```

이렇게 지정해야 link 속성에 접근이 가능하다.

`HTMLAnchorElement` 은 link 속성을 담당하는 곳으로 Element 보다 더 세분화된 타입이라고 볼 수 있다.

<br/>

**이미지를 변경하고 싶을 때도 마찬가지이다.**

```html
<img id="image" src="test.jpg">
```

해당 타입이 있다고 가정하자.

```tsx
let img = document.querySelector('#image');
if (img instanceof HTMLImageElement){
  img.src = 'change.jpg';
}
```

image 속성을 담당하는 타입은 `HTMLImageElement` 인 것이다.

그렇다. 이렇게 상세하게 narrowing 해줘야 타입스크립트가 인정을 해준다.

<br/>

### 이벤트 리스너 부착해보기

```tsx
let button = document.getElementById("button");

button?.addEventListener("click", () => {
    console.log("clicked");
})
```

`button?` (optional chaining) 을 통해 해당 타입이 존재하는 타입인지 체킹을 해줬다.

타입의 존재유무를 체킹하는 방법은 다양하게 있다.

narrowing 타입스크립트에 근간임을 잊지말자!