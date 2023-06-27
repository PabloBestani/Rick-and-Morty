const app = require("../app");
const session = require('supertest');
const agent = session(app);

// describe("Test de RUTAS", () => {
//     console.log("hola bro");
// });

describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async() => {
        await agent.get('/rickandmorty/character/1').expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async() => {
        const data = await agent.get('/rickandmorty/character/1');
        expect(data.body).toHaveProperty("id");
        expect(data.body).toHaveProperty("name");
        expect(data.body).toHaveProperty("species");
        expect(data.body).toHaveProperty("gender");
        expect(data.body).toHaveProperty("status");
        expect(data.body).toHaveProperty("origin");
        expect(data.body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async() => {
        await agent.get('/rickandmorty/character/dfsds').expect(500);
    });
})


describe("GET /rickandmorty/login", () => {
    it()
})