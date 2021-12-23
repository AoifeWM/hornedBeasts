import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';

class HornForm extends React.Component{
  render(){
    return(
      <>
        <Form>
            <Form.Label>Filter by horn number</Form.Label>
            <Form.Select onChange={this.props.handler} aria-label="Default select example">
                <option value={0}>All Beasts</option>
                <option value={1}>One Horn</option>
                <option value={2}>Two Horns</option>
                <option value={3}>3 Horns</option>
                <option value={100}>100 Horns</option>
            </Form.Select>
        </Form>
      </>
    );
  }
}

export default HornForm;
