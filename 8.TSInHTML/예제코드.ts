/*
<h4 id="title">안녕하세요</h4>
<a href="naver.com" id="link">링크</a>
<button id="button">버튼</button>
<script src="변환된 자바스크립트파일.js"></script>
해당 html 코드가 있다고 가정
 */

//첫번째 : title 변경해보기
let title = document.getElementById("title");
//title.innerHTML = "hi"; => narrowing을 해줘야한다.

//narrowing 방법
// 1. null or Element
if(title) title.innerHTML = "hi";

// 2. instanceof
if(title instanceof Element) title.innerHTML = "hi";

//3. as로 강제형변환
let title2 = document.getElementById("title2") as Element;
title2.innerHTML = "hi";

//4. optional chaining 연산자
if(title?.innerHTML) title.innerHTML = "hi";


// 두번째 : href 링크 변경해보기
let link = document.getElementById("link");
if(link instanceof HTMLAnchorElement) link.href = "google.com";
// HTMLAnchorElement와 같이 더 세분화된 타입을 명시해줘야함

// 세번째 : 이벤트리스너 부착해보기
let button = document.getElementById("button");

// optional chaining을 통해 간단한 타입 체크
button?.addEventListener("click", () => {
    console.log("clicked");
})