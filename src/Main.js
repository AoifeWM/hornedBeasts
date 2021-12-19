import React from 'react';
import './App.css';
import HornedBeast from './HornedBeast';
import Col from 'react-bootstrap/Col';
// import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component{
  render(){
    return(
      <div className="Main">
          <h1>Horned Beasts</h1>
          <div className="cardContainer">
            {
              this.props.beastData.map((obj, idx) => {
                return <Col><HornedBeast title={obj.title} image_url={obj.image_url} desc={obj.description} keyword={obj.keyword} horns={obj.horns} beastNumber={idx} showBeast={this.props.showBeast}/></Col>;
              })
            }
          </div>
      </div>
    );
  }
}

export default Main;
