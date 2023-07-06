import { useRef, useState } from "react";
import { v4 as uuid} from 'uuid';
import "../styles/addToDoList.scss";
import Child from "./todolistchild";
export default function AddToDo(){
    const inputRef =useRef(null);
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditToDo] = useState(null);
    const [todos, setTodos] = useState([]);
    const updateList = (action, arg) =>{
        switch (action) {
            case "edit":
              setEdit(true);
              setEditToDo(arg);
              inputRef.current.value = arg.title;
              break;
            case "delete":
              setTodos(todos.filter((e) => e.id !== arg.id));
              break;
          }
    };
    const handleClick = () => {
        if (edit) {
          setEdit(false);
          setTodos(
            todos.map((e) => {
              if (e.id == editTodo.id) {
                e.title = inputRef.current.value;
              }
              return e;
            })
          );
        } else {
          setTodos([
            ...todos,
            {
              id: uuid(),
              title: inputRef.current.value,
            },
          ]);
        }
      };


    return(
        <div className="addtoDo-container">
             <div className="add">
                 <input type = "checkbox"/>
                 <input ref={inputRef} type = "text" placeholder="Add a Task"/>
                 <button onClick={handleClick}>{edit ? "EDIT" : "ADD"}</button>
             </div>
             <div className="list">
             {todos.map((e) => (
                    <Child updateList={updateList} todo={e} key={uuid()}/>
               ))}
             </div>
        </div>
    )
}