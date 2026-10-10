const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config({ path: '../../.env' })

describe('Api produtos', async () => {
    describe('GET /api/produtos', function () {
        it('deve retornar 200 e uma lista de produtos', async () => {

            const response = await request(process.env.BASE_URL)
                .get('/api/produtos')
                .set('Content-Type', 'application/json')

            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
        });

        it('deve retornar 405 ao utilizar um método não permitido', async () => {

            const response = await request(process.env.BASE_URL)
                .post('/api/produtos')
                .set('Content-Type', 'application/json')

            expect(response.status).to.equal(405)
        });
    });

});

describe('Api produtos', async () => {
    describe('GET /api/produtos/{id}', function () {
        it('deve consultar um produto existente e retornar 200', async () => {

            const response = await request(process.env.BASE_URL)
                .get('/api/produtos/P001')
                .set('Content-Type', 'application/json')

            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("P001")
            expect(response.body.nome).to.equal("Camiseta Essencial")
            expect(response.body.descricao).to.equal("Algodão penteado e corte reto.")
            expect(response.body.categoria).to.equal("Vestuário")
            expect(response.body.preco).to.equal(59.9)

        })

        it('deve consultar um produto inexistente e retornar 404', async () => {

            const response = await request(process.env.BASE_URL)

                .get('/api/produtos/P020')
                .set('Content-Type', 'application/json')

            expect(response.status).to.equal(404)
        });
    });
});
