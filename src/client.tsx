import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./view/App";
import withAuth0AxiosInterceptor from "./infrastructure/withAuth0AxiosInterceptor";

const AuthenticatedApp = withAuthenticationRequired(
  withAuth0AxiosInterceptor(App)
);

hydrate(
  <Auth0Provider
    domain={process.env.RAZZLE_AUTH0_DOMAIN!!}
    clientId={process.env.RAZZLE_AUTH0_CLIENT_ID!!}
    redirectUri={window.location.origin}
    audience={process.env.RAZZLE_AUTH0_AUDIENCE}
    useRefreshTokens={true}
  >
    <BrowserRouter>
      <AuthenticatedApp />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
