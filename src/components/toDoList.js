import GetMonthName from './dateFunction';
import {BsSun} from 'react-icons/bs';
import { SlOptions } from 'react-icons/sl';
import {BsArrowDownUp,BsCalendarDate} from 'react-icons/bs';
import {AiOutlineStar}  from 'react-icons/ai';
import {SlCalender} from 'react-icons/sl';

import "../styles/toDoList.scss";
import Navbar from './navBar';
import { useState } from 'react';
import AddToDo from './addToDoList';
export default function ToDoList() {
    const [toggle,setToggle] = useState(false);
    const handleClick = () =>{
        setToggle(!toggle);
    }
   const date = new Date();
   const dateObj = {
    month: date.getMonth(),
    day: date.getDay(),
    year: date.getFullYear(),
    date: date.getDate()
   }
   console.log(dateObj);
   
    return(
        <div className='toDoListContainer'>
            <div className='myDay-container'>
             <div className='sideBar'>
                <Navbar/>
             </div>
            <div className='myDay'>
                <div className='myDayPart1'>
                     <div><button><BsSun/></button></div>
                     <div>
                        <div className='title'>My Day</div>
                        <div className='date'>
                           <span><GetMonthName data={dateObj}/> </span> 
                           <span>{dateObj.date}</span>  
                        </div> 
                      </div>
                     <div><button><SlOptions/></button></div>
                </div>
               
                <div className='myDayPart2'>
                    <div><button onClick={handleClick} ><BsArrowDownUp/></button></div> 
                    <div>Sort</div>
                </div>
              </div> 
           </div>
           {
            toggle? 
            <div className='sortList'>
            <div>Sort by</div>
            <div className='sort-link'>
                <div><AiOutlineStar/></div> 
                <div>Importance</div>
            </div>
            <div  className='sort-link'>
                <div><SlCalender/></div> 
                <div>Due Date</div>
            </div>
            <div  className='sort-link'>
                <div><BsArrowDownUp/></div> 
                <div>Alphabetically</div>
            </div>
            <div className='sort-link'>
               <div><BsCalendarDate/></div> 
                <div>Creation Date</div>
            </div>
         </div>
         :
         <></>
           }
         <div className='addToDo'>
                <AddToDo/>
         </div>
        </div>
    )
}