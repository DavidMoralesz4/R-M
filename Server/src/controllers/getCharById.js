const axios = require('axios')

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({data}) => {
            const persons = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                status: data.status
            }
        
            res.writeHead(200, {'Content-type' : 'application/json'})
            return res.end(JSON.stringify(persons))
        })
        .catch(error => {
            res.writeHead(500, {'Content-type' : 'text/plain'})
            return res.end(new Error(error))
        })
}

module.exports = {
    getCharById
}