### **Never type**

함수에 붙이는 return type으로 사용가능하다.

특정 함수가 아래의 조건을 만족하면 자동으로 등장하는 타입이다.

1. return 을 절대 하지 않고
2. 함수의 실행이 끝나지 않을 때

하지만 이러한 함수를 내가 의도해서 작성할 일은 대부분 없을 것이고,

**그렇기에 `type never`이 등장하면 내가 코드를 조금 이상하게 작성했구나~ 라고 판단하면 될 것 같다.**

대표적인 예시 **파라미터가 never 타입이 될 때**가 있다.

```tsx
function neverEx2(param : string){
    if(typeof param === "string") param + 1;
    else param -1;
}
```

param은 절대로 string 밖에 못들어오는 상황에서 else 문은 성립할 수 없다.

else 구문에 해당하는 param에 마우스를 얹으면 자동으로 never 타입이 할당되어있다.