import './App.css';
import Home from './Components/Home';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import AuthProvider from './Context/authContext'; // Ensure the path is correct

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Home />
      <Footer />
    </AuthProvider>
  );
  
}

export default App;
