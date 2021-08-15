class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  /// /////////
  patch(url, data) {
    return this.fetch('PATCH', url, data);
  }

  get(url, options = {}) {
    return this.fetch('GET', url, undefined, options);
  }

  post(url, data) {
    return this.fetch('POST', url, data);
  }

  delete(url) {
    return this.fetch('DELETE', url);
  }

  put(url, data) {
    return this.fetch('PUT', url, data);
  }

  fetch(method, url, data = undefined, options = {}) {
    return fetch(`${this.baseUrl}/${url}`, {
      method,
      headers: this.headers,
      'Content-Type': 'application/json',
      credentials: 'include',
      body: JSON.stringify(data),
      ...options,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    });
  }
}

export default Api;
