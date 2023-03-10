import { appFactory } from '../src/application'
import * as request from 'supertest';

describe('We are grateful to you for doing this it.', () => {
  it('thanks you', async () => {
    const app = appFactory();
    await request(app)
      .get('/hello')
      .expect(200)
      .expect(function(res) {
        expect(res.body.greetings).toContain('Thank you');
      });
  })
});
