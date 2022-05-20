import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const withAuth0AxiosInterceptor =
  (Component) =>
  ({ ...props }) => {
    const { getAccessTokenSilently } = useAuth0();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
      axios.interceptors.request.use(async (config) => {
        const accessToken = await getAccessTokenSilently();
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`,
        };
        return config;
      });
      setInitialized(true);
    }, []);

    return initialized ? <Component {...props} /> : null;
  };

export default withAuth0AxiosInterceptor;
