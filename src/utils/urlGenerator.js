const buildUrl = (params = {}) => {
	const url = 'http://api.mediastack.com/v1/news';
	const defaultParams = {
		access_key: 'fc352fe510ef0bb51ebb193502da3d48',
		languages: 'en',
		limit: '50',
		...params,
	};

	const query = Object.entries(defaultParams)
		.map(([key, val]) => `${key}=${val}`)
		.join('&');

	const finalUrl = `${url}?${query}`;
	return finalUrl;
};

export default buildUrl;
