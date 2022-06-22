export default class Http {
  constructor(baseUrl) {
    if (typeof baseUrl !== 'string' || !baseUrl) throw new Error(`expected valid url, got: ${baseUrl}`);
    this.baseUrl = baseUrl;
  }

  get(endpoint) {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseUrl}/${endpoint}`)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  post(endpoint, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(async (response) => {
          try {
            const data = await response.json();
            return data;
          } catch (err) {
            return response;
          }
        })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}