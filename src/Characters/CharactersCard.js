import React, { useState } from 'react'

import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

import './CharacterCards.css'


const CharacterCard = ({id, comics, name, series, stories, thumbnail, urls}) => {


    const [characterInfo, setCharacterInfo] = useState({
        id : id,
        href : `/characters/${id}`,
        comics : comics,
        name : name,
        series : series,
        stories : stories,
        thumbnail : thumbnail,
        urls : urls
    })



    return (
        <div className='characterDiv'>
            <a href={characterInfo.href}>
                <Card inverse className='characterCards'>
                    <CardImg width="100%" height="100%" src={characterInfo.thumbnail} alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle tag="h1" id="characterName">{characterInfo.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </a>
        </div>
    )
}

export default CharacterCard