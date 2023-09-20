import React, {createContext} from "react";
import "./App.css";
import  UserProfile  from "./components/userProfile";
import user from './img/profile.jpg'

export const MyContext = createContext();
class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      user: {
        image: user,
        name: 'John',
        email: 'javoh1104@gmail.com',
        salary: '45000'
      },
      user1: {
        name: 'Mark',
        email: 'mark123@gmail.com',
        salary: '90000'
      },
      user2: {
        name: 'Heeren',
        email: 'heeren.tech@gmail.com',
        salary: '120000'
      }
    };
  }

  render() {
    return (
      <MyContext.Provider value={{
        ...this.state
      }}>
        {this.props.children}
        <h2 className="text-center m-3">User Profiles</h2>
        <UserProfile />
      </MyContext.Provider>
    );
  }
}

export default App;
