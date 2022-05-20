const { createApiClient } = require('dots-wrapper');
const digitalOceanApi = createApiClient({ token: undefined });

exports.main = async (request) => {
	// this call will fail and throw because the API token is missing (set to undefined on line 2)
	await digitalOceanApi.account.getAccount();

	return {
		headers:  { 'content-type': 'application/json; charset=UTF-8' },
		body: JSON.stringify({
			success: true
		})
	};
};
