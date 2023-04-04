// loginForm.addEventListener("submit", onLoginSubmit)
// 1. prevent - From 제출 시 새로고침 (브라우저 기본 동작)
// 2. Form 양식을 제출하면 Form 양식을 사라지게 하고 싶음 - by ".hidden" 추가시켜서
// 3. username이라는 변수에 input의 value값 (즉, 사용자가 입력한 사용자 이름)을 담는다
// 4. greeting + 사용자 이름 합쳐서 h1에 글자를 넣어주고 (아직 #greeting은 hidden으로 숨겨져 있음)
// 5. #greeting 에 .hidden을 제거해 화면에 나타나도록 함

const loginBox = document.querySelector('.loginBox')
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");
const greeting = document.querySelector("h1#greeting");
// const greetingElement = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){ //form에 이름 적으면 실행할건 이거야
    event.preventDefault(event); //새로고침 막아줘
    loginBox.style = 'opacity: 0;'
    loginForm.classList.add(HIDDEN_CLASSNAME); //form 사라지게 해줘
    const username = loginInput.value; //사용자 이름 담아줘
    localStorage.setItem(USERNAME_KEY, username); //사용자 이름 저장해줘
    console.log(username); //사용자 이름 출력해줘
    paintGreetings(username); //사용자 이름 넣어서 인사해줘
}



function paintGreetings(typedname) {
    const { hours24 } = getClock(); //24시간제 시간 호출
    let greetingText;

    if (hours24 >= 5 && hours24 < 12) {
        greetingText = `Good morning, ${typedname}`;
    } else if (hours24 >= 12 && hours24 < 18) {
        greetingText = `Good afternoon, ${typedname}`;
    } else if (hours24 >= 18 && hours24 < 22) {
        greetingText = `Good evening, ${typedname}`;
    } else {
        greetingText = `Good night, ${typedname}`;
    }

    greeting.innerText = greetingText;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY); //저장된 사용자 이름을 저장하는 변수
if(savedUsername === null){ //사용자 이름 저장된 변수에 아무것도 없으면
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); //form 보여줘
    loginForm.addEventListener("submit", onLoginSubmit); //submit시키면 onLoginSubmit실행시켜줘
}else{ //사용자 이름 저장된 변수에 이름이 있다면
    //show the greetings
    paintGreetings(savedUsername); 
}



R