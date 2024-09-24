### **public 키워드**

- public이 붙은 속성들은 자식 object들이 마음대로 수정할 수 있다.
- public 키워드는 굳이 명시하지 않아도 자동으로 적용된다.
- public 키워드는 class 내의 prototype 함수에도 붙일 수 있다.
    - prototype 함수란 모든 인스턴스가 공유하는 함수를 말한다.

```tsx
class User {
  public name: string;

  constructor(){
    this.name = 'kim';
  }
  
  public sayHello() {
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
  }
}

let user1 = new User();
user1.name = 'park';  //가능
```

<br/>

### private 키워드

- private 키워드를 붙이면 외부에서 수정이 불가능해진다.
    - 자식 object들도 이를 수정하지 못하는 거는 마찬가지이다.
    - private 가 부여된 변수를 외부에서 수정하기 위해서는 class 내부에서 해당 변수를 수정하는 함수를 선언하고, 그걸 외부에서 사용하면 된다.

<br/>

### **public & private 예제코드**

```tsx
//public은 클래스 내부 외부에서 자유롭게 수정이 가능
//private는 외부에서 수정이 불가능
class Users{
    public firstName;
    private lastName;
    private fullName;
    constructor(firstName:string,lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + this.lastName;
    }

    //private 변수를 수정하기 위해서는 함수를 통해
    changeLastName(lastName:string){
        this.lastName = lastName;
        this.fullName = this.firstName + this.lastName;
    }
}

let tmpUser = new Users("jaesung","sim");
console.log(tmpUser);
//Users { firstName: 'jaesung', lastName: 'sim', fullName: 'jaesungsim' }
tmpUser.lastName = "kim"; //error : private 변수는 바로 접근하여 수정이 불가능

tmpUser.firstName = "joon";
console.log(tmpUser);
//Users { firstName: 'joon', lastName: 'sim', fullName: 'jaesungsim' }

tmpUser.changeLastName("park");
console.log(tmpUser);
//Users { firstName: 'joon', lastName: 'park', fullName: 'joonpark' }
```

public으로 선언된 `firstName` 변수는 외부에서 자유롭게 수정을 하는 반면

private 으로 선언된 `lastName` 변수는 클래스 내부에 선언된 `changeLastName` 함수를 통해 수정을 할 수 있다.

private 은 외부로 지켜주고 싶은 변수에 달아주면 좋을 것 같다.

클래스 내부에 함수를 통해 수정할 수 있는 장치를 마련해둠으로써 해당 변수에 안전장치를 하나 더 달아준 그런 느낌이다.

버그 예방 가능!

<br/>

### **public, private 키워드로 코드 길이 줄이기**

타입스크립트에서 class를 선언할 때,

constructor 내부에 변수를 사용하기 위해서는 최상단에 해당 변수를 선언해줘야하는 불편함이 있는데, public, private 키워드를 통해 해당 부분이 축약 가능하다.

```tsx
//키워드 사용 X
class Persons{
	name;
	constructor ( name :string ){  
    this.name = name;
  } 
}
let tmpPerson = new Persons("jaesung");

//public 키워드를 통해 클래스 필드 변수 선언 과정 축약가능
class Persons{
    constructor(public name : string){

    }
}

let tmpPerson = new Persons("jaesung");
console.log(tmpPerson);
```

하지만 이렇게 constructor 파라미터에 public을 붙이면 name, this.name = name; 을 축약할 수 있다.