const axios = require("axios")

const { publicKey, privateKey } = require('./Configure')

const md5 = require('js-md5')



const BASE_URL = 'http://gateway.marvel.com/v1/public'


class ApiCalls {

    static async request(endpoint, query = '', method = 'get'){
        console.log(endpoint, query, method)
        console.debug("API Call:", endpoint, method);

        let ts = new Date().getTime();

        let hash = md5( `${ts}` + `${privateKey}`  + `${publicKey}` )
 
        try{
            return await axios({
                method: method,
                url : `${BASE_URL}/${endpoint}?${query}&ts=${ts}&apikey=${publicKey}&hash=${hash}`,
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
        }catch (err){
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async setUpHomePage(){

        let num = Math.floor(Math.random() * (1559 - 1 + 1) + 1)

        
        let res = await this.request('characters', `offset=${num}`)
        return (res.data.data.results)
    
    }

    static async getAllCharacters(offset, bool = false, char){
        if(bool == false){
            let res = await this.request('characters', `offset=${offset}`)
            return res.data.data.results
        }else{
            let res = await this.request('characters', `nameStartsWith=${char}`)
            return res.data.data.results
        }
    }

    static async getSpecificCharacter(char){
        let res = await this.request('characters', `nameStartsWith=${char}`)
        return res.data.data.results

    }

    static async findCharacterInformation(id){
        // Basic character info
        let res1 = await this.request(`characters/${id}`)
        let res2 = await this.request(`characters/${id}/series`)
        let res3 = await this.request(`characters/${id}/comics`)

        return [{ 'character' : res1.data.data.results, 'seriesInfo' : res2.data.data.results, 'comicInfo' : res3.data.data.results}]        
    }

    static async getCharacterStories(storyId){
        let res = await this.request(`stories/${storyId}`)
        return res.data.data.results
    }

}

export default ApiCalls