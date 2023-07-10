
       
import {FiEdit2} from "react-icons/fi"
import {RiDeleteBin3Line} from "react-icons/ri"
import '../styles/todolistchild.scss';


export default function DataList({todo,updateList}) {

    return(
        <div className="child">
         <div>
              <input className="chkbox" type = "checkbox"/>
             <span key= {todo._id}>{todo.title}</span>
        </div>
        
        <div>
            <span> <FiEdit2 onClick={() => updateList("edit", todo)}/></span>
            <span><RiDeleteBin3Line onClick={() => updateList("delete", todo)}/></span>  
        </div>
        </div>
    )
}