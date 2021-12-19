import React from 'react';
import './App.css';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import beastData from './data.json';
import SelectedBeast from './SelectedBeast';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show: false,
      beastNumber: 0
    }
  }

  showBeast = beastNumber => {
    this.setState({show: true});
    this.setState({beastNumber: beastNumber});
  }
  onHide = () => {
    this.setState({show: false});
  }
  render(){
    return(
      <div className="App">
        <Header />
        <Main beastData={beastData} showBeast={this.showBeast}/>
        <Footer />
        <SelectedBeast show={this.state.show} onHide={this.onHide} beast={beastData[this.state.beastNumber]}/>
      </div>
    );
  }
}

export default App;
