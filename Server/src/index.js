const http = require("http");
const allChars = require("./utils/data.js");

const PORT = 3001;

const Server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const {url} = req;

    if (url.includes('/rickandmorty/character')) {
        const id = parseInt(url.split("/").at(-1));
        let character = allChars.filter((char) => char.id === id);
        // let character = null;
        // for (let i = 0; i < allChars.length; i++) {
        //     if (allChars[i].id === id) {
        //         character = allChars[i];
        //     }
        // }


        // if (character.length > 0) {
            res.writeHead(200, {"content-type": "application/json"});
            res.end(JSON.stringify(character));
        // } else {
        //     res.writeHead(404, {"content-type": "text/plain"});
        //     res.end("character not found");
        // }
    }
})
.listen(PORT, "localhost");

module.exports = {
    Server
}