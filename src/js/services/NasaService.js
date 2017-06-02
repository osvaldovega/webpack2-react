import APICalls from './APICalls';
import config from './config';

export default class Nasa {
  constructor() {
    this.nasa = new APICalls(config.nasa.base_url);
    this.key = config.nasa.key;
  }

  // Provide the API key to the partial URL
  attachKeyToUrl(apiRoute) {
    return apiRoute + this.key;
  }

  getRoversData() {
    return this.nasa.get(this.attachKeyToUrl(config.nasa.rovers_url_1), '');
  }

  getApodData() {
    return this.nasa.get(this.attachKeyToUrl(config.nasa.apod_url), '');
  }

}
