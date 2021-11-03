import React, { useLayoutEffect, useState } from 'react'


import LoadingSymbol from '../LoadiingSymbol'
import './Home.css'

import { Row, Col } from 'reactstrap'

import ApiCalls from '../APIInfo'
import Footer from '../Footer/Footer'



const Home = () => {

    const [characterList, setCharacterList] = useState()

    useLayoutEffect(() => {
        async function search(){
            let response = await ApiCalls.setUpHomePage()
            setCharacterList(response)
        }

        search()
    }, [])

    console.log(characterList)


    const Images = ({el}) => {
        let imgSrc = el.thumbnail.path + '.' + el.thumbnail.extension
        console.log(el.thumbnail.path)
        if(el.thumbnail.path != 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') return <img src={imgSrc} id='characterImages' ></img>
        return null
            
    }
    

    if(!characterList) return <LoadingSymbol />

    return (
        <div className='homeDiv'>
            <Row className='imagesRow' >
                <Col >
                    {characterList.map(el => {
                        return <Images el={el} />
                    })}
                </Col>
            </Row>
            <Row style={{marginTop : '-8em'}}>
                <Footer />
            </Row>
        </div>
    )
}

export default Home