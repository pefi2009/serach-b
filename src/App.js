import { useState } from 'react';
 
import Table from 'react-bootstrap/Table';
import {Random} from './Components/Random';
import Form from 'react-bootstrap/Form';

function BasicExample() {
 const [search,setSerach] = useState('') 
  console.log(search)
  return (
    <>
    <Form className="d-flex">
    <Form.Control
      onChange={(e)=>setSerach(e.target.value)}
      placeholder="Search"
      
    />
 
  </Form>
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>ID </th>
        <th>FirstName </th>
        <th>LastName </th>
        <th>Gender</th>
        <th> IpAdress</th>
        <th>Email </th>
      </tr>
    </thead>
    <tbody>
      {Random.
      filter((item) =>{
        return search.toLocaleLowerCase() === ''
        ? item
        :item.first_name.toLocaleLowerCase().includes(search)
      })
      .map((item)=>(

      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.gender}</td>
        <td>{item.ip_address}</td>
        <td>{item.email}</td>
      </tr>
      ))}
      
    </tbody>
  </Table>
  </>
);
}
   
export default BasicExample;