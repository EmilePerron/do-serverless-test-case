
exports.main = async (request) => {
	throw new Error("oops");

	return {
		headers:  { 'content-type': 'application/json; charset=UTF-8' },
		body: JSON.stringify({
			success: true
		})
	};
};
