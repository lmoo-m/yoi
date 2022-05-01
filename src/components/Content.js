import { useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import Cardd from "./Card"
import Click from "./Click"

const Content = () => {
    const [Text, Settext] = useState(false)

    const p = () => {
        Settext(true)
        console.log(Text)
    }

    return(
        <div className="full  d-flex justify-content-center align-items-center p-3" id="content">
            <Row className="g-4">
                <Col onClick={() => p()}>
                    {
                        Text ? (
                            <Cardd />
                        ) : (
                            <Click/>
                        )
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Content