import React from 'react';
import './App.css';
import HornedBeast from './HornedBeast';
import beastData from './data.json';

class Main extends React.Component{
  render(){
    return(
      <div className="Main">
          <h1>Horned Beasts</h1>
          {beastData.map(obj => {
            return <HornedBeast title={obj.title} image_url={obj.image_url} desc={obj.description} keyword={obj.keyword} horns={obj.horns}/>;
          })}
      </div>
    );
  }
}

export default Main;
