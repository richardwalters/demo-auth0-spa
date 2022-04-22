import { FunctionComponent } from "react";
import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Page: FunctionComponent = () => {
  const { user } = useAuth0();

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default Page;
