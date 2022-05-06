import './App.css'
import './reset.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Register from './pages/Register';



function App() {
  return (
      <BrowserRouter className='wrapper'>
        <Header />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about" exact><About /></Route>
          <Route path="/contacts" exact><Contacts /></Route>
          <Route path="/register" exact><Register /></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
