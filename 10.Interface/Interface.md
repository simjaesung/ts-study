**Object**의 타입을 지정할 수 있는 방법에는 **interface** 키워드를 사용하는 방법이 있다.

물론 **type** 키워드를 통해서도 타입 지정이 한데, **interface** 키워드를 사용하면 어떠한 이점이 있을지 알아보자.

<br/>

### **Object에 쓸 수 있는 interface 문법**

```tsx
interface Square { 
  color :string, 
  width :number, 
} 

let square :Square = { color : 'red', width : 100 };
```

그리고 **interface** 내부에서 한줄이 끝날 때 콤마 대신 세미콜론도 사용 가능하다.

```tsx
interface Square { 
  color :string;
  width :number; 
} 
```

여기까지 봐서는 `type` 키워드와 별반 차이가 없어보인다.

<br/>

### **extends가 가능하다**

`extends` 키워드는 class 상속을 할 때 등장했던 키워드인데,

해당 키워드를 **interface**에서 사용이 가능하다.

```tsx
interface Student {
  name :string,
}

interface Teacher {
  name :string,
  age :number,
}
```


해당 코드에서 `Student`와 `Teacher` 모두 중복된 `name :string` 을 가진 것을 볼 수 있다.

이를 조금 더 간결하게 고쳐보면

```tsx
interface Student {
  name :string,
}
interface Teacher extends Student {
  age :number
}
```

중복된 부분을 이렇게 `extends` 키워드를 통해 분류해줄 수 있다.

물론 `type` 키워드에서도 이와 같은 기능이 존재한다.

```tsx
type Animal = { 
  name :string 
} 
type Cat = Animal & { legs: number }
```

`Cat` 이 `Animal` + `legs` 타입을 사용할 수 있게되는 코드이다.

extends 키워드가 익숙하고 조금 더 직관적이다!라고 생각이 들지만, 솔직히 별반 차이는 없어보인다.

<br/>

하지만 두 키워드의 차이는 중복 부분에서 크게 느껴진다.

<br/>

### **타입이름 중복선언시**

```tsx
//interface는 중복 선언을 해도 에러가 발생하지 않는다.
interface Animal { 
  name :string 
} 
interface Animal { 
  legs :number 
}

//type은 중복 선언을 할 경우 에러가 발생한다.
type Human = { 
  name :string 
} 
type Human = { 
  age :number 
}
```

타입명을 중복으로 선언하는 경우의 `type`과 `interface` 키워드의 차이점을 볼 수 있다.

<br/>

**interface를 중복으로 선언하는 경우**

- 중복 시 에러 발생하지 않는다.
- 중복 시 extends 한 것과 동일하게 동작한다.

  상단 코드의 Animal은 아래와 같은 interface를 갖게 된 것이다.

    ```tsx
    interface Animal { 
      name :string;
      legs :number;
    }
    ```

<br/>

**type은 중복선언을 절대 허용하지 않는다.**

- type이 더 엄격하다.

interface가 절대적으로 좋다고 말할 수 는 없을 것 같다.

이또한 다양한 경험을 하며 나만의 기준을 정해야할 것 같다.

<br/>

### **object 안의 속성이 중복될 경우**

```tsx
interface Animal { 
  name :string 
} 
interface Dog extends Animal { 
  name :number 
}
//error
```

이와 같이 같은 속성에 다른 타입을 중복시키면 에러가 발생한다.

```tsx
interface Animal {
    name :string
}
interface Dog extends Animal {
    name :string
}
```

하지만 이와 같이 같은 속성에 같은 타입을 중복시키면 에러가 발생하지 않는다.

그냥 합쳐준다고 한다.

<br/>

```tsx
interface Animal { 
  name :string 
} 
interface Dog { 
  name :number
} 

let intersection :Dog & Animal = { name : '심숑' }
```

이와 같이 intersection 시키는 경우도 에러가 발생한다.

그리고 type 키워드에서도 이와 같은 에러를 잡아준다.