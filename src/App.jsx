import "./App.css";
import "./reset.css";
import { Component } from "react";
import { UserContext } from "./contexts";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

class App extends Component {
  state = {
    user: {
      id: 1,
      login: 'testTest',
      email: 'test@test.com',
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
  };
  
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <Header />
        <Sidebar />
      </UserContext.Provider>
      
    );
  }
}

export default App;
