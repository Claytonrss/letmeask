import { createServer, Model } from 'miragejs';
import users from './mocks/users.json';
import { UserObject } from './types';

export function MockServer({ environment = 'development' }) {
  return createServer({
    environment,
    routes() {
      this.namespace = 'api';
      this.get('/users');
    },
    models: {
      user: Model.extend<Partial<UserObject>>({}),
    },
    fixtures: {
      users,
    },
    seeds(server) {
      server.loadFixtures();
    },
  });
}
