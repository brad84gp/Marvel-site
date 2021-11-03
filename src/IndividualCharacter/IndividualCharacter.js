import React, {  useEffect,  useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  Col, Row } from 'reactstrap'

import './IndividualCharacter.css'

import ApiCalls from '../APIInfo'
import LoadingSymbol from '../LoadiingSymbol'
import Series_Comics from './Series/SeriesComics'
import Footer from '../Footer/Footer'
import CharacterStories from './Stories/Stories'



const IndividualCharacter = () => {
    
    let { id } = useParams()

    const dispatch = useDispatch()
    
    let characterInfo = useSelector(store => store.characterInfo)

    let { character, seriesInfo, comicInfo } = characterInfo

    useEffect(() => {
        async function getCharacters(){
            let response = await ApiCalls.findCharacterInformation(id)
            dispatch({ type : 'NEW_CHARACTER', payload : response})
        }
        getCharacters()
    }, [])

    console.log(characterInfo)
    
   const CreateList = ({element}) => {
        return <li style={{listStyle : 'none'}}><a href={element.url} target="_blank" id="urlAnchor">{element.type}</a></li>
   }


    if(!character) return <LoadingSymbol />
    return (
        <div>
            <Row style={{height : '100vh', marginTop : '2em'}}>

                <Col md={2} lg={1}></Col>


                <Col sm={12} md={8} lg={10} className="pageColumn">
                    <Row>

                        <Col sm={12} md={2}>
                            <div className="stickyDiv">
                                <img src={characterInfo.character[0].thumbnail.path + '.' + characterInfo.character[0].thumbnail.extension} id='comicImage'/>
                                <div id="characterInfo">
                                    <h3>{characterInfo.character[0].name}</h3>
                                    <h5>Total Comics : {characterInfo.character[0].comics.available}</h5>
                                    <h5>Total Series : {characterInfo.character[0].series.available}</h5>
                                    <h5>Total Stories : {characterInfo.character[0].stories.available}</h5>
                                    <h5>Related URLS</h5>
                                    <ul>
                                        {characterInfo.character[0].urls.map(element => {
                                            return <CreateList element={element} />
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col md={3}></Col>

                        <Col md={6}>
                            <Row>
                            <h1 id="seriesTitle"><u>Character Series</u></h1>
                                {seriesInfo ? (
                                    <div className="seriesCardDeck">
                                            {seriesInfo.map(el => (
                                                <Series_Comics
                                                    key={el.id}
                                                    format='series'
                                                    id={el.id}
                                                    characters={el.characters} 
                                                    dates={el.dates}
                                                    description={el.description}
                                                    image={el.thumbnail.path + '.' + el.thumbnail.extension}
                                                    prices={el.prices}
                                                    title={el.title}
                                                    upc={el.prices}
                                                    issueNum={el.issueNumber}
                                                    pageCount={el.pageCount}
                                                />
                                            ))}
                                    </div>
                                ) : null}
                            </Row>

                            <Row style={{marginTop : '5em'}}>
                                <h1 id="comicsTitle"><u>Character Comics</u></h1>
                                {comicInfo ? (
                                    <div className="ComicsCardDeck">
                                            {comicInfo.map(el => (
                                                <Series_Comics
                                                    key={el.id}
                                                    format='comics'
                                                    id={el.id}
                                                    characters={el.characters} 
                                                    dates={el.dates}
                                                    description={el.description}
                                                    image={el.thumbnail.path + '.' + el.thumbnail.extension}
                                                    prices={el.prices}
                                                    title={el.title}
                                                    upc={el.prices}
                                                    issueNum={el.issueNumber}
                                                    pageCount={el.pageCount}
                                                />
                                            ))}
                                    </div>
                                ) : null}
                            </Row>

                            <Row style={{marginTop : '5em'}}>
                                <h1 id="storiesTitle"><u>Character Stories</u></h1>
                                {characterInfo ? (
                                    <div className="ComicStoryCard">
                                            {characterInfo.character[0].stories.items.map(el => (
                                                <CharacterStories storyId={el.resourceURI} />
                                            ))}
                                    </div>
                                ) : null}
                            </Row>
                        </Col>

                    </Row>
                    <Row style={{marginLeft : '-8.9em'}}>
                        <Footer />
                    </Row>
                </Col>


                <Col md={2} lg={1}></Col>

            </Row>
            
        </div>
    )
}


export default IndividualCharacter