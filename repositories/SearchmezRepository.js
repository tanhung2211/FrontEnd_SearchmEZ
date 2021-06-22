import Repository, {baseAPI, serializeQuery} from './Repository';

class SearchmezRepository {
    async getListingSlug(slug) {
        const reponse = await Repository.get(
            `${baseAPI}/listing/${slug}`
        )
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    return { items: response.data };
                } else {
                    return null;
                }
                return response.data;
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }
    async getListings(params) {
        const reponse = await Repository.get(
            `${baseAPI}/listing?${serializeQuery(params)}`
        )
            .then((response) => {
                return {
                    items: response.data,
                    totalItems: response.data.length,
                };
            })

            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async getListerById(payload) {
        const reponse = await Repository.get(`${baseAPI}/lister/${payload}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async login(email, password,rememberme) {
        const reponse = await Repository.get(
            `${baseAPI}/auth/login?email=${email}&password=${password}&rememberme=${rememberme}`
        )
            .then((response) => {
                console.log(response);
                return;
            })

            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new SearchmezRepository();
