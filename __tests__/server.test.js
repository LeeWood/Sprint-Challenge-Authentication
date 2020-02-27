const request = require('supertest');
const server = require('../api/server.js');

//tests that server is running and in testing env.
describe('server.js', () => {
  it('should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('/GET', () => {
    it('should return 200', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
    it("should return 'up and running' message", async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ message: "up and running" });
    })
  });
});