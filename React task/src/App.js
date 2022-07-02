import './App.css';
import { BrowserRouter as Router } from "react-router-dom"; 
import Header from './components/Header';
import Routing from './router/Routing';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routing />
      </Router>
    </>
  );
}

export default App;
