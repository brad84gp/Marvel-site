import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Card, CardImg, Row, Col, Button, Collapse, CardSubtitle, CardTitle, CardBody } from 'reactstrap';
import Footer from "../../Footer/Footer";
import './ComicPopUp.css'

const ComicPopUp = () => {

    const {comicInfo} = useSelector(store => store.characterInfo)

    console.log(comicInfo)


    const ComicInfoCards = ({el}) => {

        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);

        return (
            <Card inverse className="comicCardPopUp">
                <CardImg id="popUpImg"  src={el.thumbnail.path + '.' + el.thumbnail.extension} alt="Card image cap" />
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                     See Details
                </Button>
                <Collapse isOpen={isOpen}>
                    <Card style={{color:'black'}}>
                        <CardTitle tag="h4">Title: {el.title}</CardTitle>
                        <CardSubtitle>UPC: {el.upc}</CardSubtitle>
                        <CardSubtitle>Digital Id: {el.digitalId}</CardSubtitle>
                        <br></br>
                        <CardBody>
                            <p>{el.description ? `"${el.description}"` : null}</p>
                            <ul>
                                <li>Issue Number: {el.issueNumber}</li>
                                <li>Modified: {el.modified.slice(0, 10)}</li>
                                <li>Prices
                                    <ul>
                                        {el.prices[0] ? <li>Print Price: ${el.prices[0].price}</li> : null}
                                        {el.prices[1] ? <li>Digital Price: ${el.prices[1].price}</li> : null}
                                    </ul>
                                </li>
                            </ul>
                        </CardBody>
                        <br></br>
                        <ul>
                            <li>
                                <h5>Related Urls</h5>
                                <ul style={{fontSize : '15px'}}>
                                    {el.urls[0] ? <li><b>{el.urls[0].type}:</b> <a href={el.urls[0].url} target="_blank" rel="noreferrer">{el.urls[0].url}</a></li> : null}
                                    {el.urls[1] ? <li><b>{el.urls[1].type}:</b> <a href={el.urls[1].url} target="_blank" rel="noreferrer">{el.urls[1].url}</a></li> : null}
                                    {el.urls[2] ? <li><b>{el.urls[2].type}:</b> <a href={el.urls[2].url} target="_blank" rel="noreferrer">{el.urls[2].url}</a></li> : null}
                                    {el.urls[3] ? <li><b>{el.urls[3].type}:</b> <a href={el.urls[3].url} target="_blank" rel="noreferrer">{el.urls[3].url}</a></li> : null}
                                </ul>
                            </li>
                        </ul>
                    </Card>
                </Collapse>
            </Card>
        )
    }
    

    return (
        <div className="comicPopUpDiv">
            <Row>
                <Col md={2} lg={1}></Col>


                <Col sm={12} md={8} lg={10}>
                    <Row>
                        {comicInfo ? (
                            <>
                                {comicInfo.map((el) => (
                                    <ComicInfoCards el={el}/>
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

export default ComicPopUp