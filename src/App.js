
import LoginPage from './login';
import SignupPage from './signup';
import HomePage from './home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<LoginPage />} activeClassName="active" />
     </Routes>
     <Routes>
       <Route
         path="/signup"
         element={
             <SignupPage />
         }
       />
     </Routes>
     <Routes>
       <Route
         path="/home"
         element={
             <HomePage />
         }
       />
     </Routes>
 
   </BrowserRouter>
  );
}

export default App;
