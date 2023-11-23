const http = require('http');
const fs = require('fs');
// const {characters} = require('./utils/data')
const { getCharById } = require('./controllers/getCharById')
const url  = require('url');
const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    
    
    if(url.includes(`/rickandmorty/character`)) {
        let id = url.split('/').at(-1)
        getCharById(res, id)
    }


    // if(url === '/rickandmorty/character'){
    //     res.writeHead(200, {'Content-type' : 'application/json'})
    //     res.end(JSON.stringify(characters))
    // }

    // if(url.includes(`/rickandmorty/character`)){
    

    //     const idFiltrado = characters.find((charac) => charac.id === Number(id))
    //     res.writeHead(200, {'Content-type' : 'application/json'})
    //     return res.end(JSON.stringify(idFiltrado))

    // }
    

}).listen(PORT, ()=> {
    console.log(`Server on port ${PORT} 🚀`);
})
