import React from 'react'
import { useHistory } from 'react-router';
import { Button, Row, Col } from 'reactstrap';

import './ErrorPage.css'

const ErrorPage = () => {

    let history = useHistory()

    function returnHome(){
        history.push('/')
    }


    return (
        <Row className="errorRow">
            <Col md={3} style={{backgroundColor : 'red'}}>
            </Col>

            <Col md={6}>
                <div id="errorDiv">
                </div>

                <div id="underError">
                   
                </div>
               
                <div id="whiteError">
                    <div id="errorMsg">
                        <h1>404/Error Page does not exist </h1>
                        <Button onClick={returnHome} style={{margin : '2em 18em'}}>Home</Button>
                    </div>
                </div>

                <div id="lastDiv">
                </div>
            </Col>

            <Col md={3} style={{backgroundColor : 'blue'}}>
            </Col>
        </Row>
    )
}

export default ErrorPage;