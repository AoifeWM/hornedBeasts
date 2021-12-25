import React from 'react';
import './App.css';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import beastData from './data.json';
import SelectedBeast from './SelectedBeast';
import HornForm from './HornForm';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show: false,
      beastNumber: 0,
      hornNumber: 0
    }
  }
  handleChange = event => {
    this.setState({hornNumber: event.target.value});
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
        <HornForm handleChange={this.handleChange} />
        <Main beastData={beastData} showBeast={this.showBeast} hornNumber={this.state.hornNumber}/>
        <Footer />
        <SelectedBeast show={this.state.show} onHide={this.onHide} beast={beastData[this.state.beastNumber]}/>
      </div>
    );
  }
}

export default App;
