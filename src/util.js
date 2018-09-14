var Util = {};
/**
 * 基于fetch封装GET请求
 * @param {String} url 
 * @param {Object} params 
 * @param {Object} headers 
 */
Util.get = function(url, params, headers) {
	if (params) {
		let paramsArray = [];
		Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
		if (url.search(/\?/) === -1) {
			url += '?' + paramsArray.join('&');
		} else {
			url += '&' + paramsArray.join('&');
		}
	}
	return new Promise((resolve,reject) => {
		fetch(url, {
			method: 'GET',
			headers: headers,
			credentials: 'include'
		}).then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				reject({status: response.status});
			}
		}).then((response) => {
			resolve(response);
		}).catch((e) => {
			reject({status: -1});
		})
	})
}

/**
 * 基于fetch封装的POST请求
 * @param {String} url 
 * @param {Object} formData 
 * @param {Object} headers 
 */
Util.post = function(url, formData, headers) {
	return new Promise((resolve,reject) => {
		fetch(url, {
			method: 'POST',
			headers: headers,
			body: formData,
			credentials: 'include'
		}).then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				reject({status: response.status})
			}
		}).then((response) => {
			resolve(response);
		}).catch((e) => {
			reject({status: -1});
		})
	})
}

export default Util;