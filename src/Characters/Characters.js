import React, { useLayoutEffect, useState } from 'react'
import {  CardGroup, Col,  Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'

import CharacterContext from './CharacterReactContext'

import ApiCalls from '../APIInfo'
import LoadingSymbol from '../LoadiingSymbol'
import CharacterCard from './CharactersCard'
import Search from './CharacterSearch'
import Footer from '../Footer/Footer'


const Characters = () => {

    const [listCharacters, setListCharacters] = useState()

    const [offset, setOffset] = useState(0)

    const [trueORfalse, setTrueORfalse] = useState({
        boolValue : false,
        charValue : ''
    })

    useLayoutEffect(() => {
        async function dsiplayCharacters(){
            if(trueORfalse.boolValue == false){
                let res = await ApiCalls.getAllCharacters(offset)
                setListCharacters(res)
            }else{
                let res = await ApiCalls.getAllCharacters(offset, trueORfalse.boolValue, trueORfalse.charValue)
                setListCharacters(res)
            }
        }
        dsiplayCharacters()
    }, [offset, trueORfalse])


    function firstPage(){
        setOffset(0)
    }

    function previousPage(){
        if(offset == 0) return null
        setOffset(offset - 20)
    }

    function nextPage(){
        if(offset > 1513) return null
        setOffset(offset + 20)
    }

    function lastPage(){
        setOffset(1514)
    }

    return (
        <div>

             <Row style={{marginTop : '2%'}}>
                <Col md={2} lg={1}></Col>

                <Col sm={12} md={8} lg={10}>
                    <CharacterContext.Provider value={{setTrueORfalse}}>
                        <Search />
                    </CharacterContext.Provider>
                    <br></br>
                    <Pagination aria-label="Page naviagtion" style={{position : 'relative', display : 'flex', justifyContent : ' center'}}>
                        <PaginationItem>
                            <PaginationLink first href="" onClick={firstPage}/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous href="" onClick={previousPage}/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="#" onClick={nextPage}/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="#"onClick={lastPage} />
                        </PaginationItem>
                    </Pagination>
                    
                </Col>

                <Col md={2} lg={1}></Col>
            </Row>


            <Row>
                <Col md={2} lg={1}></Col>

                <Col sm={12} md={8} lg={10}>
                    <Row>
                    {listCharacters ? (
                            <CardGroup>
                                {listCharacters.map(el => (
                                    <CharacterCard 
                                        key={el.id}
                                        id={el.id}
                                        comics={el.comics}
                                        name={el.name}
                                        series={el.series}
                                        stories={el.stories}
                                        thumbnail={el.thumbnail.path + '.' + el.thumbnail.extension}
                                        urls={el.urls}
                                    />
                                ))}
                            </CardGroup>
                    ) : <LoadingSymbol />}
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

export default Characters