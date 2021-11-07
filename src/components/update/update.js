import React, { useState, useEffect } from 'react'
import {Form, Button} from 'semantic-ui-react';
import axios from 'axios'
import { Link, useHistory, useParams  } from 'react-router-dom'


export default function Update() {


    const { id } = useParams();
    let history = useHistory();

    

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [ID, setID] = useState(null);

console.log(firstName, lastName, ID)

console.log(history)

const sendDataToApi = () => {
  
    axios.put(`https://617c6683d842cf001711c372.mockapi.io/Crud/${ID}`, {
    firstName, 
    lastName
 }).then(() => {
     history.push('/read')
 })
}

useEffect(() => {
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setID(localStorage.getItem('ID'))
}, [])

    return (
        <div>
            <Form>
    <Form.Field>
      <label> {id}. First Name</label>
      <input  name="fname" 
      value = {firstName}
      placeholder='First Name'
      onChange={(e) => setFirstName(e.target.value)} 
      />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name="lname" 
      value= {lastName}
      placeholder='Last Name'
      onChange={(e) => setLastName(e.target.value)} 
       />
    </Form.Field>
   
    <Button type='submit' onClick={sendDataToApi}>Update</Button> 
   <Link to="/read"> <Button>list</Button> </Link>
  </Form> 
        </div>
    )
}
