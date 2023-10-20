import Service from './Service';

const WEEKDAYS = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
const TYPES = {
  cardio: 'Cardio',
  energy: 'Energie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité',
};

export default class User extends Service {
  static resourceUrl = 'http://localhost:3000/user';

  static findable = true;

  static async getPerformances(id) {
    const { data } = await fetch(`${this.resourceUrl}/${id}/performance`).then(
      (res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Unable to fetch performances resources');
      },
    );
    if (data !== undefined) {
      const { kind, data: performance } = data;
      const formattedData = performance.map((perf) => ({
        ...perf,
        kind: TYPES[kind[perf.kind]],
      }));
      return formattedData;
    }
    return false;
  }

  static async getActivity(id) {
    const { data } = await fetch(`${this.resourceUrl}/${id}/activity`).then(
      (res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Unable to fetch activity resources');
      },
    );
    if (data !== undefined) {
      const { sessions } = data;
      const formattedData = sessions.sort((a, b) => a.day - b.day);
      return formattedData;
    }
    return false;
  }

  static async getAverageSessions(id) {
    const { data } = await fetch(
      `${this.resourceUrl}/${id}/average-sessions`,
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Unable to fetch average sessions resources');
    });
    if (data !== undefined) {
      const { sessions } = data;
      const formattedData = sessions.map((session) => ({
        ...session,
        day: WEEKDAYS[session.day],
      }));
      return formattedData;
    }
    return false;
  }
}
