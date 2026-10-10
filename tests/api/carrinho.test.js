const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config({ path: '../../.env' })

const itensValidos = [
    { produtoId: "P002", quantidade: 1 },
    { produtoId: "P004", quantidade: 2 }
]

const cupomValido = 'BEMVINDO10'

describe('Api carrinho', async () => {
    describe('POST /api/carrinho/calcular', async () => {
        it('deve calcular o subtotal e frete corretamente', async () => {

            const response = await request(process.env.BASE_URL)

                .post('/api/carrinho/calcular')
                .set('Content-Type', 'application/json')
                .send({
                    itens: itensValidos,
                    cupom: cupomValido,
                })

                console.log(response.body);

            expect(response.status).to.equal(200);
            expect(response.body.subtotal).to.equal(239.7);
            expect(response.body.desconto).to.equal(23.97);
            expect(response.body.frete).to.equal(0);
            expect(response.body.freteGratis).to.equal(true);
            expect(response.body.valorFaltanteFreteGratis).to.equal(0);
            expect(response.body.total).to.equal(215.73);
        })

        it('deve cobrar o frete quando o subtotal for menor que R$ 200,00', async () => {

            const itemEncontrado = itensValidos.find(item => item.produtoId === "P002");

            const response = await request(process.env.BASE_URL)
            

                .post('/api/carrinho/calcular')
                .set('Content-Type', 'application/json')
                .send({
                    itens: [itemEncontrado]

                })
            expect(response.status).to.equal(200);
            expect(response.body.subtotal).to.equal(139.9);
            expect(response.body.frete).to.equal(19.90);
            expect(response.body.freteGratis).to.equal(false);
            expect(response.body.valorFaltanteFreteGratis).to.equal(60.1);
            expect(response.body.total).to.equal(159.8);
        });
    })

});