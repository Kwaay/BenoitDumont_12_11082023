import Service from './Service';
import Formatter from '../utils/Format';

export default class User extends Service {
  static resourceUrl = 'http://localhost:3000/user';

  static findable = true;

  static async getPerformances(id) {
    try {
      const res = await fetch(`${this.resourceUrl}/${id}/performance`);
      if (res.ok) {
        const { data } = await res.json();
        return Formatter.formatPerformances(data);
      }
      return false;
    } catch (e) {
      throw new Error('Unable to fetch performance resources');
    }
  }

  static async getActivity(id) {
    try {
      const res = await fetch(`${this.resourceUrl}/${id}/activity`);
      if (res.ok) {
        const { data } = await res.json();
        return Formatter.formatActivity(data);
      }
      return false;
    } catch (e) {
      throw new Error('Unable to fetch activity resources');
    }
  }

  static async getAverageSessions(id) {
    try {
      const res = await fetch(`${this.resourceUrl}/${id}/average-sessions`);
      if (res.ok) {
        const { data } = await res.json();
        return Formatter.formatAverageSessions(data);
      }
      return false;
    } catch (e) {
      throw new Error('Unable to fetch average sessions resources');
    }
  }
}
