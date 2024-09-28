### **class 안에서 쓰는 protected 키워드**

```tsx
class Dust{
    protected x : number = 10;
    private y : number = 10;
    public z : number = 20;
}

class smallDust extends Dust{
    testFunc(){
        this.x = 20;
        //this.y = 30; //error,
    }
}

let kdust = new smallDust();
kdust.x = 11; //error, protected로 선언된 변수는 외부에서 수정이 불가능하다.
kdust.z = 11;
```

기존 `private` 로 선언한 변수는 해당 변수를 선언한 class 내에서 사용이 가능이 가능했지만,

`protected` 로 선언한 변수는 해당 변수를 선언한 class를 상속받은 자식 클래스에서도 접근과 수정이 가능하다.

하지만 두 타입 다 외부에서 접근하고 수정하는 것은 불가능하다.

class 를 여러개 생성할 일이 있을 때,

- class 끼리 공유할 수 있는 속성을 만들고 싶으면 `protected`
- class 하나 안에서만 쓸 수 있는 속성을 만들고 싶으면 `private`

를 사용하도록 하자.

<br/>

### **class 안에서 쓰는 static 키워드**

일반적으로 class 내부에서 만든 변수나 함수는, 해당 클래스로 부터 생성된 인스턴스에서 사용이 가능하다.

```tsx
class User {
  x = 10;
  y = 20;
}

let john = new User();
john.x //가능
User.x //불가능
```

하지만 `static` 키워드를 붙이면 얘기가 달라진다.

```tsx
class User {
  static x = 10;
  y = 20;
}

let john = new User();
john.x //불가능
User.x //가능
```

해당 변수를 선언한 클래스에서 오히려 접근이 가능하고,

생성된 인스턴스에서는 해당 변수에 접근이 불가능해진다.

`static` 변수는 상속이 될까?

```tsx
class PP2{
    static x = 10;
    static y = 20;
}
class PP22 extends PP2{}
console.log(PP2);
console.log("PP22.x:",PP22.x); //10

PP22.x = 30; // 자식 클래스에서 수정 시 새로운 static 변수가 생성되는 것

console.log("PP22.x:",PP22.x); //30
console.log("PP2.x:",PP2.x); // 10 => 유지
```

상속 시 `static` 변수는 그대로 상속이 되는 것을 볼 수 있으며,

자식 클래스에서 이를 수정 시 별개의 자식 클래스에서만 static 변수가 변하는 것을 볼 수 있었으며,

부모 클래스에서 수정 시, 자식 클래스의 static 변수도 수정되는 것을 볼 수 있었다.

<br/>

### 그렇다면 static 은 언제 사용될까?

1. `*인스턴스 카운터 : 클래스의 인스턴스가 몇개 생성되었는지 알고싶을 때*`

    ```tsx
    class ComUser{
        private static userCount : number = 0;
        private name : string;
        constructor(name: string) {
            this.name = name;
            ComUser.userCount++;
        }
    
        static getUserCount() : number{
            return ComUser.userCount;
        }
    }
    
    let mpmp = new ComUser("11");
    let mpmp2 = new ComUser("12");
    console.log(ComUser.getUserCount());
    ```

2. `*설정 값 혹은 상수*`

    ```tsx
    class Config {
        static readonly API_URL: string = "https://api.example.com";
        static readonly MAX_RETRY_COUNT: number = 3;
    }
    
    console.log(Config.API_URL); // 출력: https://api.example.com
    console.log(Config.MAX_RETRY_COUNT); // 출력: 3
    ```

3. `*유틸리티 함수*`

    ```tsx
    class MathUtils {
        static add(a: number, b: number): number {
            return a + b;
        }
    
        static multiply(a: number, b: number): number {
            return a * b;
        }
    }
    console.log(MathUtils.add(5, 3));
    console.log(MathUtils.multiply(4, 2));
    ```


1. `*싱글톤 패턴 : 클래스의 인스턴스가 하나만 존재하도록 보장할 때`*

    ```tsx
    class Database{
        private static instance: Database | null = null;
    
        static getInstance(): Database {
            if (!Database.instance) {
                Database.instance = new Database();
            }
            return Database.instance;
        }
    }
    
    const db1 = Database.getInstance();
    const db2 = Database.getInstance();
    
    console.log(db1 === db2); // 출력: true (같은 인스턴스)
    ```