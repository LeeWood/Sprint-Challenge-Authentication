const db = require('../database/dbConfig.js');
const Users = require('../users/users-model.js');

beforeEach(async () => {
  await db('users').truncate();
});

// this essentially tests the auth/register endpoint.
describe('user model', () => {

  describe('add', () => {
    it('should add new user info into table', async () => {
      await Users.add({ username: "newUser1", password: "pass" });
      await Users.add({ username: "newUser2", password: "pass" });
  
      const users = await db('users');
      expect(users).toHaveLength(2);
    })
  
    it('should return the username of the newly added user', async () => {
      let user = await Users.add({ username: "newUser3", password: "pass" });
      //await Users.findBy({username})
      expect(user.username).toBe("newUser3");
    })
  }) 

});