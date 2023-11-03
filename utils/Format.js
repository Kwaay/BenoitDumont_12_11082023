const TYPES = {
  cardio: 'Cardio',
  energy: 'Energie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité',
};
const WEEKDAYS = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };

export default class Formatter {
  static async formatPerformances(data) {
    const { kind, data: performance } = data;
    const formattedData = performance.map((perf) => ({
      ...perf,
      kind: TYPES[kind[perf.kind]],
    }));
    return formattedData;
  }

  static async formatActivity(data) {
    const { sessions } = data;
    const formattedData = sessions.sort((a, b) => a.day - b.day);
    return formattedData;
  }

  static async formatAverageSessions(data) {
    const { sessions } = data;
    const formattedData = sessions.map((session) => ({
      ...session,
      day: WEEKDAYS[session.day],
    }));
    return formattedData;
  }
}
