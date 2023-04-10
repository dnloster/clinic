import publicClient from './client/public.client';

const expertEndpoints = {
    detail: ({ expertID }) => `doi-ngu-chuyen-gia/${expertID}`,
};

const expertApi = {
    detail: async ({ expertID }) => {
        try {
            const response = await publicClient.get(expertEndpoints.detail({ expertID }));
            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default expertApi;
