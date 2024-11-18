import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './includes/header/Header';
import Footer from './includes/footer/Footer';
import Rout from './Rout';

function App() {
  return (
    <>
      <Router basename="/">
        <Header />
          <main>
            <Rout />
          </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;