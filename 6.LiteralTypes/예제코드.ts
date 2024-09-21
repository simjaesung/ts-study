//파라미터로 가위,바위,보만 올 수 있고, 리턴값으로 가위,바위,보만 담길 수 있는 배열
function rsp(rsp : '가위' | '바위' | '보') : ('가위'|'바위'|'보') []{
    return ['가위'];
}

console.log(rsp('바위'));

//object의 속성 값을 타입으로 지정하는 방법
const f = (a : 'kim') => {
    console.log(a);
}
//1. 타입 지정해주기
interface K1 {
    name : 'kim';
}

let k1 : K1 = {
    name : 'kim'
}

f(k1.name);

//2.  assertion 사용하기
let k2 = {
    name : 'kim'
}

f(k2.name as 'kim')

//3. const as 사용하기
let k3 = {
    name : 'kim'
} as const;
f(k3.name);

//const as 를 사용한다면?
//1. 타입을 object의 value로 바꿔준다.
//2. object안에 있는 모든 속성을 readonly로 바꿔준다.




