import React, { useState } from 'react'
import {  Route, useHistory } from 'react-router';

import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
  } from 'reactstrap';



const Series = ({format, id, characters, dates = null, description, image, prices = null, title, upc = null, issueNum = null, pageCount = null}) => {

    const history = useHistory()

    const [seriesComics, setSeriesComics] = useState({
        id : id,
        format : format,
        characters : characters, 
        dates : dates,
        description : description,
        image : image,
        prices : prices,
        title : title,
        upc : upc,
        issueNum : issueNum,
        pageCount : pageCount
    })

    function renderComic(){
        history.push("/ComicPopUp")
    }

    function renderSeries(){
        history.push(`/SeriesPopUp`)
    }

 


    if(seriesComics.format == 'series'){
        return (        
            <Card className="seriesCard" id={seriesComics.id}>
            <CardImg top width="100%" src={seriesComics.image} alt="Card image cap" />
            <CardBody className="cardBody">
                <CardTitle tag="h5" >{seriesComics.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted" >Series</CardSubtitle>
                <CardText >{seriesComics.description}</CardText>
                <Button onClick={renderSeries}>View More</Button>
            </CardBody>
            </Card>
        )
    }

    if(seriesComics.format == 'comics'){
        return (     
            <Card className="ComicCard">
            <CardImg top width="100%" src={seriesComics.image} alt="Card image cap" />
            <CardBody className="cardBody">
                <CardTitle tag="h5" >{seriesComics.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted" >Comic</CardSubtitle>
                <CardText >{seriesComics.description}</CardText>
                <Button onClick={renderComic}>View More</Button>
            </CardBody>
            </Card>
        )
    }

}

export default Series
