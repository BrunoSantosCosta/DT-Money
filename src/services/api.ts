import axios from "axios";
import { createServer, Model } from 'miragejs';


const api = axios.create({
  baseURL: '/api'
})

function falseApi() {
  createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Dividendos',
            type: 'deposit',
            category: 'Fundos Imobiliarios',
            amount: 3000,
            createdAt: new Date('2021-02-12 09:00:00'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'Apartamento',
            amount: 1190,
            createdAt: new Date('2021-02-14 11:00:00'),
          },
        ],
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/transactions', () => this.schema.all('transaction'));

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', { ...data, createdAt: new Date() });
      });
    },
  });
}

export { api, falseApi };
