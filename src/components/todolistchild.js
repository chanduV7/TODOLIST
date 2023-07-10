       
import {FiEdit2} from "react-icons/fi"
import {RiDeleteBin3Line} from "react-icons/ri"
import '../styles/todolistchild.scss';
import { useEffect, useState } from "react";



const Child = ({todo,updateList}) => {
     const [listitem, setListitem] = useState([])

      const postData = async() => {
        const baseUrl = "https://students.codex.today/";
        const token = localStorage.getItem("token");
       
        try {
           const response = await fetch(`${baseUrl}todo/add`,{
           method: "POST",
           headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
           },
            body: JSON.stringify(todo)
           }) ;
           const resout = await response.json();
           console.log(resout);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        postData()
    },[]);
    return(
      <div className="child">
        <div>
              <input className="chkbox" type = "checkbox"/>
             <span>{todo.title}</span>
        </div>
        
        <div>
            <span> <FiEdit2 onClick={() => updateList("edit", todo)}/></span>
            <span><RiDeleteBin3Line onClick={() => updateList("delete", todo)}/></span>  
        </div>
       
    </div>
    )
}

export default Child;