import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ToDoList from './components/toDoList';
import RegisterPage from './components/signUpPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './components/loginPage';
import Important from './components/important';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <div>Start Page</div>
    },
    {
      path:"/signup",
      element : <RegisterPage/>
    },
    {
      path:"/login",
      element : <LoginPage/>
    },
    {
      path:"/home",
      element: <div>
                 <Header/>
                 <ToDoList/>
               </div>
    },
    {
      path:"/important",
      element: <div>
                  <Header/>
                  <Important/>
               </div>      
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
