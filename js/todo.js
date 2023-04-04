const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul#todo-list"); //ul태그


// local storage key
const TODOS_KEY = "todos";


// local storage에 저장할 객체
let toDos = [];


//ToDo 객체 저장
function saveToDos(){ 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // Array -> 배열형태인척 하는"string" 만들기
    // string을 진짜 배열로 만들어야함 
}


//todo 삭제
function deleteToDos(event){
    const writtenLi = event.target.parentElement;

    writtenLi.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(writtenLi.id)); 
    //받아온 object의 아이디(number)와 숫자형태로 만든 리스트의 아이디값을 비교해서 다른 것은 남겨줘
    saveToDos();
    // 남겨준 것들을 다시 localStorage에다가 저장시켜줘
}

//todo 체크
function paintToDo(newTodo){
    const li =  document.createElement('li');
    li.id = newTodo.id;
    const button = document.createElement('button');
    button.innerText = "📌";
    const span = document.createElement('span');
    span.innerText = newTodo.text;  // 입력한 내용이 span 태그 글자가 되게 바꿔라
 
    button.addEventListener("click", deleteToDos)
    li.appendChild(button);
    li.appendChild(span); // li에 span을 붙임
    toDoList.appendChild(li); // 작성한 newToDo(li>span)를 ul태그에 붙여라 - li만 붙여도 span이 따라오겠쥐?
    
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    // todo에 적은 값을 newToDo에 저장
    toDoInput.value ="";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    // 엔터를 누르면 todo에 적은 글자가 없어지게 해주고~
    paintToDo(newToDoObj);
    // ul>li 로 todo 리스트가 추가됨
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY); //저장된 ToDos 아이템 갖고 오기
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}


