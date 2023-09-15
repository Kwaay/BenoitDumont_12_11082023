import Service from './Service';

export default class User extends Service {
  static resourceUrl = 'http://localhost:3000/user';

  static findable = true;

  static async getPerformances(id) {
    const { data } = await fetch(`${this.resourceUrl}/${id}/performance`).then(
      (res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Unable to fetch activity resources');
      },
    );
    if (data !== undefined) {
      const { kind, data: performance } = data;
      const formattedData = performance.map((perf) => ({
        ...perf,
        kind: kind[perf.kind],
      }));
      return formattedData;
    }
    return false;
  }
}
