import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './App.css';


class SelectedBeast extends React.Component{
  render(){
    return(
      <div className="SelectedBeast">
          <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.beast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={this.props.beast.image_url} alt={this.props.beast.title} fluid rounded/>
                <p>
                    {this.props.beast.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>
    );
  }
}

export default SelectedBeast;