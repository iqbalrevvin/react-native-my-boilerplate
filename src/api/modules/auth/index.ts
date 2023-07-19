import { api } from '../../api';
import endpoints from '../../endpoints';

export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: creadentials => ({
                url: endpoints.LOGIN,
                method: 'POST',
                body: { ...creadentials },
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
