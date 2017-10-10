import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 10, password: 'a', username: 'Marco' },
      { id: 11, password: 'a', username: 'Roberta' },
      { id: 12, password: 'a', username: 'Giorgia' },
      { id: 13, password: 'a', username: 'Ilaria' }
    ];
    return {users};
  }
}