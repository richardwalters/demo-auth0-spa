# Auth0 SPA Demo

This is a simple Single Page App created using [Razzle](https://razzlejs.org/) to demonstrate authentication with [Auth0](https://auth0.com).
The app uses the [Auth0 React SDK](https://auth0.com/docs/libraries/auth0-react) for the implementation.

The app will immediately redirect unauthenticated users to the Auth0 login page.
An authenticated user will be shown the detail of their Auth ID token.

## Configuration

Make a copy of .env.example as .env.local and provide the relevant Auth0 configuration values.
Run the app by executing `npm start`.
