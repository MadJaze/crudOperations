import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Read() {

const [apiData, setApiData] = useState([]); 



useEffect(() => {
    axios.get(`https://617c6683d842cf001711c372.mockapi.io/Crud`)
    .then((getData) => {
        setApiData(getData.data)
    })
}, [])



const setData = (id, firstName, lastName) => {
    console.log(id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('ID', id)
}

const getData = () => {
    axios.get(`https://617c6683d842cf001711c372.mockapi.io/Crud`)
    .then((getData) => {
        setApiData(getData.data)
    })
}

const onDelete = (id) => {
    let confirmDelete = window.confirm('Are you sure about delete this element?');
    if (confirmDelete) {
        axios.delete(`https://617c6683d842cf001711c372.mockapi.io/Crud/${id}`)
        .then(() => { 
            getData();
        })
    } else {
        axios.get(`https://617c6683d842cf001711c372.mockapi.io/Crud`)
        .then((getData) => { 
            setApiData(getData.data);
        })
    }
 
}



    return (
        <div>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

        {apiData.map((data) => {
            return (
        <Table.Row>
             <Table.Cell>{data.id}</Table.Cell>
        <Table.Cell>{data.firstName}</Table.Cell>
        <Table.Cell>{data.lastName}</Table.Cell>
       <Table.Cell>
           <Link to={`/update/${data.id}`}> 
           <Button color="green" onClick={() => setData(data.id, data.firstName, data.lastName)}>
               Update</Button> </Link>
           </Table.Cell>
           <Table.Cell>
          <Button color="red"  onClick={() => onDelete(data.id)}>Delete</Button>
       </Table.Cell>
        </Table.Row>
            )
        })}
     
    
      
    </Table.Body>
    <Link to ="/"><Button color="blue" >Add Contact</Button></Link>
  </Table>
        </div>
    )
}


