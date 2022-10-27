const request = require('supertest');

describe('Acin.com', () => {    
    it('should repond with 200 OK', async () => {
        const response = await request('https://www.acin.com').get('/')
        expect(response.status).toEqual(200);
      });
  });