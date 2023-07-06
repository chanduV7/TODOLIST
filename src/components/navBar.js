import {BiMenu} from 'react-icons/bi';
import {BsSun} from 'react-icons/bs';
import {AiOutlineStar}  from 'react-icons/ai';
import {SlCalender} from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import  "../styles/navBar.scss";
 export default function Navbar(){
   const navigate = useNavigate();
   const goToMyDay = () => {
      navigate("/home")
   }
   const goToImp = () => {
      navigate("/important")
  }
      return(
        <div className="navBarContainer">
             <div><BiMenu/></div>
             <div onClick={goToMyDay()}>
                <span><BsSun/></span>
                <span>My Day</span>
             </div>
             <div onClick={goToImp()}>
                <span><AiOutlineStar/></span>
                <span>Important</span>
             </div>
             <div>
                <span><SlCalender/></span>
                <span>Planned</span>
             </div>
        </div>
      )
}