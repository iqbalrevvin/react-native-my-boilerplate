import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  BaseQueryApi,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { get } from 'lodash';
import { logout, setCredentials } from '../store/auth';
import endpoints from './endpoints';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = get(getState(), 'auth.token', null);
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const _handleFetchRefreshToken = async (
    result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: {}
  ) => {
  const resultRefreshToken = await baseQuery(endpoints.REFRESH_TOKEN, api, extraOptions);

  if (resultRefreshToken?.data){
    const user = get(api.getState(), 'auth.user', null);

    api.dispatch(setCredentials({ ...resultRefreshToken.data, user }));

    result = await baseQuery(args, api, extraOptions);

  } else {
    api.dispatch(logout());
  }
};

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs,unknown,FetchBaseQueryError>
= async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const error = get(result, 'error', null);

  if (error && error.status === 401) {
    _handleFetchRefreshToken(result, args, api, extraOptions);
  }

  console.log('baseQueryWithInterceptor-result', result);
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
