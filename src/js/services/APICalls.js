import 'isomorphic-fetch';

export default class APICalls {
	constructor(baseURL) {
		this.baseURL = baseURL;
		this.checkStatus = this.checkStatus.bind(this);
		this.parseJSON = this.parseJSON.bind(this);
		this.formatApiEndpoint = this.formatApiEndpoint.bind(this);
		this.queryParams = this.queryParams.bind(this);
	}

	checkStatus(response) {
		// If everything is OK
		if(response.status >= 200 && response.status < 300) {
			return response;
		}

		// If there is an ERROR
		if(response.status >= 400) {
			throw new Error(`${response.statusText}`);
		}
	}

	parseJSON(response) {
		return response.json();
	}

	formatApiEndpoint(url, params) {
		let targetURL = url;
		if (params) {
			targetURL += (url.includes('?') ? '&' : '?') + this.queryParams(params);
		}
		return this.baseURL + (targetURL || '');
	}

	queryParams(params) {
		return Object.keys(params)
			.map(p => `${encodeURIComponent(p)}=${encodeURIComponent(params[p])}`)
			.join('&');
	}

	//------------- API FUNCTIONS -------------------------//

	get(url, params) {
		const options = { method: 'GET' };
		const apiEndpoint = this.formatApiEndpoint(url, params);
		return fetch(apiEndpoint, options)
			.then(this.checkStatus)
			.then(this.parseJSON);
	}

	put(url, body) {
		const apiEndpoint = this.formatApiEndpoint(url);
		const options = { method: 'PUT', body: JSON.stringify(body) };
		return fetch(apiEndpoint, options)
			.then(this.checkStatus)
			.then(this.parseJSON);
	}

	post(url, body) {
		const apiEndpoint = this.formatApiEndpoint(url);
		const options = { method: 'POST', body: JSON.stringify(body) };
		return fetch(apiEndpoint, options)
			.then(this.checkStatus)
			.then(this.parseJSON);
	}

	delete(url) {
		const apiEndpoint = this.formatApiEndpoint(url);
		const options = { method: 'DELETE' };
		return fetch(apiEndpoint, options)
			.then(this.checkStatus)
			.then(this.parseJSON);
	}
}
