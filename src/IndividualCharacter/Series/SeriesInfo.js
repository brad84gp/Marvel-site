import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Card, CardImg, Row, Col, Button, Collapse, CardSubtitle, CardTitle, CardBody } from 'reactstrap';

import './SeriesInfo.css'
import Footer from "../../Footer/Footer";



const SeriesInfo = () => {

    const {seriesInfo} = useSelector(store => store.characterInfo)


    const SeriesInfoCards = ({el}) => {

        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);

        const Creator = ({el}) => {
            return <li><b>name:</b> {el.name} <b>Role: </b> {el.role}</li>
        }

        return (
            <Card inverse className="seriesInfoPopUp" id={el.id}>
                <CardImg id="popUpImg" src={el.thumbnail.path + '.' + el.thumbnail.extension} alt="Card image cap" />
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                     See Details
                </Button>
                <Collapse isOpen={isOpen}>
                    <Card style={{color:'black'}}>
                        <CardTitle tag="h4">Title: {el.title}</CardTitle>
                        <CardSubtitle>Start Year: {el.startYear}</CardSubtitle>
                        <CardSubtitle>End Year: {el.endYear}</CardSubtitle>
                        {el.rating ? <CardSubtitle>Rating: {el.rating}</CardSubtitle> : null}
                        <br></br>
                        <CardBody>
                            <p>{el.description ? `"${el.description}"` : null}</p>
                            <ul>
                                <li>Modified: {el.modified.slice(0, 10)}</li>
                                <li>Creators
                                    
                                    {el.creators.items ? (
                                        <ul>
                                            {el.creators.items.map(el => {
                                               return <Creator el={el} />
                                            })}
                                        </ul>
                                    ) : null}
                                </li>
                            </ul>
                        </CardBody>
                        <br></br>
                        <ul>
                            <li>
                                <h5>Related Urls</h5>
                                <ul style={{fontSize : '15px'}}>
                                    {el.urls[0] ? <li><b>{el.urls[0].type}:</b> <a href={el.urls[0].url} target="_blank"  rel="noreferrer">{el.urls[0].url}</a></li> : null}
                                    {el.urls[1] ? <li><b>{el.urls[1].type}:</b> <a href={el.urls[1].url} target="_blank"  rel="noreferrer">{el.urls[1].url}</a></li> : null}
                                    {el.urls[2] ? <li><b>{el.urls[2].type}:</b> <a href={el.urls[2].url} target="_blank"  rel="noreferrer">{el.urls[2].url}</a></li> : null}
                                    {el.urls[3] ? <li><b>{el.urls[3].type}:</b> <a href={el.urls[3].url} target="_blank"  rel="noreferrer">{el.urls[3].url}</a></li> : null}
                                </ul>
                            </li>
                        </ul>
                    </Card>
                </Collapse>
            </Card>
        )
    };

    return (
        <div className="SeriesPopUpDiv">
            <Row>
                <Col md={2} lg={1}></Col>


                <Col sm={12} md={8} lg={10}>
                    <Row>
                        {seriesInfo ? (
                            <>
                                {seriesInfo.map((el) => (
                                    <SeriesInfoCards el={el}/>
                                ))}
                            </>
                        ) : null}
                    </Row>

                </Col>

                <Col md={2} lg={1}></Col>
            </Row>
            <Row>
                <Footer />
            </Row>
          
        </div>
    )
}

export default SeriesInfo