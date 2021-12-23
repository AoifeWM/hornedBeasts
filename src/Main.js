import React from 'react';
import './App.css';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  render(){
    return(
      <div className="Main">
          <div className="cardContainer">
            {
              this.props.beastData.map((obj, idx) => {
                if(parseInt(this.props.hornNumber) === parseInt(obj.horns) || parseInt(this.props.hornNumber) === 0){
                  return <HornedBeast title={obj.title} image_url={obj.image_url} desc={obj.description} keyword={obj.keyword} horns={obj.horns} beastNumber={idx} showBeast={this.props.showBeast}/>;
                }else{
                  return '';
                }
              })
            }
          </div>
      </div>
    );
  }
}

export default Main;
