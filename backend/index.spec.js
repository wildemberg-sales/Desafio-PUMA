const { describe, expect, test } = require("@jest/globals");
const request = require('supertest');
const app = require("./server");
const axios = require('axios')


describe('Testando rota get /users', ()=>{
  test('Deve retornar a lista de usuários favoritos', async () => {
    const res = await request(app).get('/users');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
})
    
describe('Testando rota post /users', ()=>{

  test('Deve adicionar um usuário aos favoritos', async () => {
    const res = await request(app).post('/users').send({ username: "mojombo" });
      
    expect(res.statusCode).toBe(201);
  });

  test('Não deve adicionar um usuário que não existe no GitHub', async () => {
    const res = await request(app).post('/users').send({ username: 'user_inexistente' });

    expect(res.statusCode).toBe(500);
    expect(res.text).toBe('Não contém nenhum usuário no GitHub com esse nome.');
  });

  test('Não deve adicionar um usuário que já está nos favoritos', async () => {
    const res = await request(app).post('/users').send({ username: 'mojombo' });

    expect(res.statusCode).toBe(500);
    expect(res.text).toBe('Esse usuário já está nos favoritos.');
  });
})
    
describe(' Testando rota delete /user/username', ()=>{
  test('Deve excluir um usuário dos favoritos', async () => {
    const res = await request(app).delete('/users/mojombo');

    expect(res.statusCode).toBe(200);
  });
})
    
describe('Testando rota pucth', ()=>{
  test('Deve atualizar a estrela dos favoritos', async () => {
    const res = await request(app).put('/users/mojombo/toggle-star');

    expect(res.statusCode).toBe(200);
  });
})
    

