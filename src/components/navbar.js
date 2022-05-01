import {Navbar, Container, Nav, FormControl, Form} from 'react-bootstrap'

const Navv = () => {
    return(
        <Navbar variant='primary'>
          <Container className='text-white'>
            <Navbar.Brand>Pikri Gabut</Navbar.Brand>
            <Nav className='d-flex align-items-center'>
              <Nav.Link href='#content' className='text-white'>Gabut</Nav.Link>
              <Nav.Link className='text-white' href='#thr'>THR</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )
}

export default Navv;