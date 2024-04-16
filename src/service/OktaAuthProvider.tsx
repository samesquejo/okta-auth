import { useNavigate } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import { ReactNode, useMemo } from "react";

const OKTA_ISSUER = "https://dev-52028787.okta.com/oauth2/default";
const OKTA_CLIENT_ID = "0oafh1jy26J2smrmu5d7";
const OKTA_SCOPES = "openid profile email";

const scopes = OKTA_SCOPES as string;
const scopesArray = scopes && scopes.split(/\s+/);

const oktaAuth = new OktaAuth({
  issuer: OKTA_ISSUER as string,
  clientId: OKTA_CLIENT_ID as string,
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: scopesArray || [],
});

interface OktaAuthProviderInterface {
  children: ReactNode;
}

const OktaAuthProvider = ({ children }: OktaAuthProviderInterface) => {
  const navigate = useNavigate();

  const restoreOriginalUri = useMemo(
    () => async (_oktaAuth: OktaAuth, originalUri: string) => {
      const url = toRelativeUrl(originalUri || "/", window.location.origin);
      navigate(url, {
        replace: true,
      });
    },
    [navigate]
  );

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      {children}
    </Security>
  );
};

export default OktaAuthProvider;

// const navigate = useNavigate();

// console.log(history, "123");
// const restoreOriginalUri = async (
//   _oktaAuth: OktaAuth,
//   originalUri?: string
// ) => {
//   const url = toRelativeUrl(originalUri || "/", window.location.origin);
//   navigate(url, {
//     replace: true,
//   });
// };
