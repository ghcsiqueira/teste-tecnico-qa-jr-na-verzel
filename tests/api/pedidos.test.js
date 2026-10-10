const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config({ path: '../../.env' })

const clientExemplo = {
    nome: "Maria João",
    email: "mariaj@gmail.com",
    cep: '53040-000'
}

const itensValidos = [
    { produtoId: "P002", quantidade: 1 }
]

describe('Api pedido', async () => {
    describe('POST /api/pedidos', function () {

        it('deve calcular o subtotal e frete corretamente', async () => {

            const response = await request(process.env.BASE_URL)

                .post('/api/carrinho/calcular')
                .set('Content-Type', 'application/json')
                .send({
                    client: clientExemplo,
                    itens: itensValidos,
                })

            expect(response.status).to.equal(200);
            expect(response.body.subtotal).to.equal(139.90);
            expect(response.body.frete).to.equal(19.9);
            expect(response.body.freteGratis).to.equal(false);
            expect(response.body.valorFaltanteFreteGratis).to.equal(60.1);
            expect(response.body.total).to.equal(159.8);
        });
    });
});




