import React from 'react';
import './App.css';
import HornedBeast from './HornedBeast';
import beastData from './data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
// import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component{
  render(){
    return(
      <div className="Main">
          <h1>Horned Beasts</h1>
          <div className="cardContainer">
            {
              beastData.map(obj => {
                return <Col><HornedBeast title={obj.title} image_url={obj.image_url} desc={obj.description} keyword={obj.keyword} horns={obj.horns}/></Col>;
              })
            }
          </div>
      </div>
    );
  }
}

export default Main;
