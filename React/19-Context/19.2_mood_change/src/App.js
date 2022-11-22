import React, {createContext, useState} from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

export const styles = createContext({mood: true}); // true - day, false - night

const App = () => {
  const [mood, setMood] = useState(true);
  return (
    <styles.Provider value={{mood, setMood}}>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </styles.Provider>
  );
}

export default App;
