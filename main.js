/*  
    사용 순서 생각해보자
    1. 사용자가 할 일을 입력한다
    2. 등록버튼 누른다.
     - 사용자가 입력한 데이터를 가져온다.
     - 요소노드(li, button), 텍스트노드(사용자 입력값 / 삭제) 생성한다.
     - 노드 연결
     - id가 'list'인 ul 요소에 연결한다.
    
    3. 웹 페이지에 내용이 나타난다.
    4. 삭제 버튼 -> 해당 요소만 삭제
     - 클릭 event
     - 부모요소.removeChild(삭제할 자식노드) 활용
*/
const todoList = document.getElementById('list');
const addTodoBtn = document.frm.addTodoBtn;

addTodoBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const todo = document.frm.todo.value;

    const new_li = document.createElement('li');
    const new_txt = document.createTextNode(todo);

    const new_button = document.createElement('button');
    const new_btn_txt = document.createTextNode("삭제");

    new_button.appendChild(new_btn_txt);

    new_li.appendChild(new_txt);
    new_li.appendChild(new_button);

    new_button.addEventListener("click", () => {
        todoList.removeChild(new_li);
    })

    todoList.appendChild(new_li);

});