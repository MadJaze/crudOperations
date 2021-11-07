import React, { useState } from 'react'
import {Form, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Create() {

  let history = useHistory()
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

console.log(firstName);
console.log(lastName);

const sendDataToApi = () => {
    axios.post(`https://617c6683d842cf001711c372.mockapi.io/Crud`, 
    {firstName, 
    lastName
 }).then(() => {
   history.push('/read')
 })
}

    return (
        <div>
            <Form>
    <Form.Field>
      <label>First Name</label>
      <input  name="fname" onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name="lname" onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' />
    </Form.Field>
   
   <Button type='submit' onClick={sendDataToApi}>Submit</Button> 
   <Link to="/read"> <Button>list</Button> </Link>
  </Form> 
        </div>
    )
}
