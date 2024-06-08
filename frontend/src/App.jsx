import { Route,Routes,BrowserRouter,Link } from 'react-router-dom';
import './App.css';
import Footer from './Components/Shared/Footer';
import Home from './Components/Home';
import Navbar from './Components/Shared/Navbar';
import AuthContext from './Context/authContext'; 
import Courses from './Components/Courses';
import About from './Components/About';

function App() {
  return (
    <>
     <AuthContext>
   <BrowserRouter>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/co" element={<Courses/>} />
        <Route path="/about" element={<About/>} />

     </Routes>
        </BrowserRouter>
      </AuthContext> 
    </>
  );
  
}

export default App;
