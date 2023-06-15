const http = require("http");
const {getCharById} = require("./controllers/getCharById");
// const allChars = require("./utils/data.js");

const PORT = 3001;

http.createServer((req, res) => {
    //*ESTO ES PARA QUE el front pueda hacer requests a este server
    res.setHeader("Access-Control-Allow-Origin", "*");

    const {url} = req;
    
    if (url.includes('/rickandmorty/character')) {
        const id = Number(url.split('/').pop());
        getCharById(res, id)
    }




    // if (url.includes('/rickandmorty/character')) {
    //     // const id = parseInt(url.split("/").at(-1));
        // const id = Number(url.split('/').pop());
    //     let character = allChars.find((char) => char.id === id);


    //     res.writeHead(200, {"content-type": "application/json"});
    //     res.end(JSON.stringify(character));
    // }
})
.listen(PORT, "localhost");