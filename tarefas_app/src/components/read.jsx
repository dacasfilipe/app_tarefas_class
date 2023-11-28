import React, {useEffect, useState} from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Read() {
    
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https:localhost:3000`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
        console.log(data);
    }
    const onDelete = (id) => {
        axios.delete(`https://localhost:3000/${id}`)
        .then(() => {
            getData();
        })
      }
    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data) => {
                    return (
                     <Table.Row>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                        <Link to='/update'>
                            <Table.Cell> 
                                <Button onClick={() => setData()}>Update</Button>
                            </Table.Cell>
                        </Link>
                        <Table.Cell>
                            <Button onClick={() => onDelete(data.id)}>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                 )})}
                </Table.Body>
            </Table>
        </div>
    )
}