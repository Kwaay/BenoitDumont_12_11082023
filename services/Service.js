export default class Service {
  static resourceUrl = '';

  static async getAll() {
    console.log(this.resourceUrl);
    return fetch(this.resourceUrl).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Unable to fetch resources');
    });
  }

  static async getOne(id) {
    console.log(id);
    if (!this.findable) throw new Error("This resource isn't findable");
    const data = await fetch(`${this.resourceUrl}/${id}`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Unable to fetch this resource');
    });
    if (data !== undefined) return data;
    return false;
  }
}
