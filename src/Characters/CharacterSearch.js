import React, { useLayoutEffect, useState, useContext } from 'react'

import { Button, Form, Input, InputGroup } from 'reactstrap'

import CharacterContext from './CharacterReactContext'

import ApiCalls from '../APIInfo'

const Search = () => {

    const [searchName, setSearchName] = useState()

    const [characterList, setCharacterList] = useState()

    const {setTrueORfalse} = useContext(CharacterContext);


    useLayoutEffect(() => {
        if(searchName){
            async function serachCharacterName(){
                let res = await ApiCalls.getSpecificCharacter(searchName)
                setCharacterList(res)
            }
            serachCharacterName()
        }
    }, [searchName])

    function searchCharacters(el){
        el.preventDefault()
        let character = document.getElementById('characterSearch')
        if(character.value == '') {
            return null
        }else{
            setSearchName(character.value)
            setTrueORfalse({
                boolValue : true,
                charValue : character.value
            })
        }
    }

    const UpdateDropdown = ({char, id}) => {
        return <option value={char} id={id} />
    }


    return (
        <div>
            <Form onChange={searchCharacters}>
                <InputGroup >
                    <Input id="characterSearch" list='characterDropdown' name='characterDropdown'/>
                    {characterList ? (
                        <datalist id="characterDropdown" style={{width : '100px'}}>
                            {characterList.map(el => (
                                <UpdateDropdown char={el.name} id={el.id} />
                            ))}
                        </datalist>
                    ) : null}
                    <Button color="secondary" type="submit" >Search Characters</Button>
                    
                </InputGroup>
            </Form>
        </div>
    )
}

export default Search