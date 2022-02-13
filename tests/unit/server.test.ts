import request from 'supertest';
import { Server } from '../../src/server/server';


let express = null;

beforeAll(() => {
    express = new Server().express;
});
afterAll(() => {
    express = null;
});
  
describe('POST /api/users', () => {

     // test('GET /api response is Welcome to Our API!', async() => {

    //     const response = await request(express).get('/api');

    //     expect(response.text).toBe('Welcome to Our API!');
    // });


    test('should respond with 200 status code', async() => {

        const response = await request(express).post('/api/users').send({username: 'steve', password: '123'});

        expect(response.statusCode).toBe(200);
    });

    test('should specify json as content type in http header', async() => {

        const response = await request(express).post('/api/users').send({username: 'steve', password: '123'});

        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });

    test('should contain a userId for successful creation in response body', async() => {

        const response = await request(express).post('/api/users').send({username: 'steve', password: '123'});

        expect(response.body.userId2).toBeDefined();
    });

    test('should return a 400 status code when username or password missing', async() => {

        const inputs = [
            {username: 'steve'},
            {password: '123'}
        ];

        for (const input in inputs) {
            const response = await request(express).post('/api/users').send(input);
            expect(response.statusCode).toBe(400);
        }
    });
});

