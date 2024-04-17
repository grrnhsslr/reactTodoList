import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function Navigation(){
   
    return (
        <Navbar className='bg-custom' expand='lg'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>ToDo list</Navbar.Brand>
                <Navbar.Toggle aria-controls='nav-collapse' />
                <Navbar.Collapse id='nav-collapse'>
                    <Nav className='me-auto'>
                        <Button className= 'my-3' variant='success'>Sign In</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}