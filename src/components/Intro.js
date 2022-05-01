import { Button, Col, Container, Row } from "react-bootstrap"

const intro = () => {
    return(
        <div className="intro d-flex justify-content-center align-items-end m-5">
            <Container className="text-white d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title">Suasana lebaran</div>
                        <Col className="mt-3 d-flex justify-content-center">
                            <Button variant="dark" href="#content">Lihat Semua</Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default intro