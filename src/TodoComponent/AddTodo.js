import react, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function AddTodo({update}){

    const[todoText,settodoText]=useState();

 const onChangeHandler=(e)=> {
    settodoText(e.target.value);

}

 const onClickHandler= ()=>{
    update(todoText);
settodoText('')


}

return(


<div><InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter A Task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
      onChange={onChangeHandler}
      value={todoText}
        />
        <Button onClick={onClickHandler}  variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup></div>








);







}