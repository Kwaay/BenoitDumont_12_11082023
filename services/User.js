import Service from './Service';

export default class User extends Service {
  static resourceUrl = 'http://localhost:3000/user';

  static findable = true;
}
