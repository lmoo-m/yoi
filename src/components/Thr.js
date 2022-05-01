import { Button, Card, Col, Container, Row } from "react-bootstrap"

const Thr = () => {

    const dana = () => {
        alert("tapi boong")
        alert("hehe")
        alert("ty udah buka ")
        alert(":)")
    }

    return(
        <div>
            <Container className="" id="thr">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body className="text-center bg-dark text-white">
                                <Card.Title>BAGI THR !</Card.Title>
                                <Card.Text>bisa diambil lewat uang digital dll</Card.Text>
                                <Button className="r-5" onClick={() => dana()}>Ambil</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Thr