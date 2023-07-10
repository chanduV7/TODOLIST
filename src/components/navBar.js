import {BiMenu} from 'react-icons/bi';
import {BsSun} from 'react-icons/bs';
import {AiOutlineStar}  from 'react-icons/ai';
import {SlCalender} from 'react-icons/sl';
import { Link } from 'react-router-dom';
import  "../styles/navBar.scss";
 export default function Navbar(){
   
      return(
        <div className="navBarContainer">
             <div><BiMenu/></div>
             <div>
                <span><BsSun/></span>
                <span> <Link to={"/home"}>My Day</Link> </span>
             </div>
             <div>
                <span><AiOutlineStar/></span>
                <span> <Link to={"/important"}>Important</Link> </span>
             </div>
             <div>
                <span><SlCalender/></span>
                <span>Planned</span>
             </div>
        </div>
      )
}