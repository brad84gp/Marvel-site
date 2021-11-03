const { default: ApiCalls } = require("../APIInfo");


async function getCharacterInfo(id){
    let response = await ApiCalls.findCharacterInformation(id)
    for(let [key, value] of Object.entries(response)){
        return [key, value]
    }

}

export default getCharacterInfo