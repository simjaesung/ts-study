//protect 속성은 private와 다르게 상속받는 클래스가 사용할 수 있다.
//private은 상속받는 클래스에서 접근할 수 없다.
class User{
    protected x : number = 10;
    private y : number = 10;
}

class NewUser extends User{
    testFunc(){
        this.x = 20;
        //this.y = 30; //ts 상 error, 출력이 되긴 한다.
    }
}


let tmpUser = new NewUser();
tmpUser.testFunc();
console.log(tmpUser);

//static 키워드

class PP{
    x = 10;
    y = 20;
}
console.log(PP.x); //undefined
let pp = new PP();
pp.x = 30;
console.log(pp);

class PP2{
    static x = 10;
    static y = 20;
}
class PP22 extends PP2{}
console.log(PP2);
console.log("PP22.x:",PP22.x);

PP22.x = 30; // 자식 클래스에서 수정 시 새로운 static 변수가 생성되는 것

console.log("PP22.x:",PP22.x); //30
console.log("PP2.x:",PP2.x); // 10 => 유지

let pp2 = new PP2(); //출력 시 static 변수는 나오지 않는다.

//static 사용예제
//1. 인스턴스 카운터 : 클래스의 인스턴스가 몇개 생성되었는지 알고싶을 때
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

//2. 설정 값 혹은 상수
class Config {
    static readonly API_URL: string = "https://api.example.com";
    static readonly MAX_RETRY_COUNT: number = 3;
}

console.log(Config.API_URL); // 출력: https://api.example.com
console.log(Config.MAX_RETRY_COUNT); // 출력: 3


//3. 유틸리티 함수
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


//4. 싱글톤 패턴 : 클래스의 인스턴스가 하나만 존재하도록 보장할 때
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