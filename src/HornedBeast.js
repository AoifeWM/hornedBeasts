import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      "status": 0
    }
  }
  handleClick = () => {
    let newStatus = this.state.status;
    newStatus += 1;
    this.setState({
      status: newStatus
    });
  }
  render(){
    return(
      <Card className="HornedBeast">
        <Card.Img src={this.props.image_url} alt={this.props.description} title={this.props.title} onClick={this.handleClick} rounded fluid/>
          <Card.Body>
            <h2>{this.props.title}</h2>
            <p>{this.props.desc}</p>
            <p>❤️{this.state.status}</p>
          </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;