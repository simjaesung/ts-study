//public은 클래스 내부 외부에서 자유롭게 수정이 가능
//private는 외부에서 수정이 불가능
class Users{
    public firstName;
    private lastName;
    private fullName;
    constructor(firstName:string, lastName : string){
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
tmpUser.firstName = "joon";
console.log(tmpUser);
tmpUser.changeLastName("park");
console.log(tmpUser);

//public 키워드를 통해 클래스 필드 변수 선언 과정 축약가능
class Persons{
    constructor(public name : string){

    }
}

let tmpPerson = new Persons("jaesung");
console.log(tmpPerson);