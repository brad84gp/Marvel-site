import React, { useEffect, useState } from 'react'
import './Stories.css'
import ApiCalls from '../../APIInfo'

import {
    Card, CardTitle, 
    CardSubtitle, CardBody
  } from 'reactstrap';

const CharacterStories = ({ storyId }) => {

    let id = ''

    for(let i = storyId.length - 1; i>0 ; i--){
        if(storyId[i] == '/'){
            let index = i + 1
            id = storyId.slice(index)
            break
        }
    }

    const [storyInfo, setStoryInfo] = useState({

    })

    useEffect(() => {
        async function getStories(id){
            let response = await ApiCalls.getCharacterStories(id)
            setStoryInfo(response)
        }

        getStories(id)
    }, [])

   
    if(!storyInfo[0]) return null
    return (
        <div className="storyDiv">
            <Card className="storyCard" >
            <CardBody className="cardBody">
                <CardTitle tag="h5" >Title : {storyInfo[0].title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted" >Original Issue : {storyInfo[0].originalIssue.name}</CardSubtitle>
            </CardBody>
            </Card>
        </div>
    )
}

export default CharacterStories