import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { history } from '@src/utils/history'
import { Mutex } from "async-mutex";
import Cookies from "universal-cookie";
import { HEADER } from ".";
// import store from '@src/redux/store'
// import { logout, setUser } from '@src/containers/authentication/feature/Auth/authSlice'

const cookies = new Cookies();
const baseUrl = process.env.REACT_APP_SERVER_AI_URL;

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers) => {
    headers.set("Access-Control-Allow-Origin", "*");
    // headers.set('content-type', 'application/json')
    headers.set(HEADER.AUTHORIZATION, "Bearer " + cookies.get("token"));
    // headers.set(HEADER.CLIENT_ID, cookies.get('user_id'))
    return headers;
  },
});

const customFetchBase = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export default customFetchBase;
