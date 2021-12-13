import React from 'react';
import './App.css';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';


class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
