import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  // Retrieve the token from localStorage, sessionStorage, or cookies

  const sub_domain = 'academics'
  return {
    headers: {
      ...headers,

      sub_domain: sub_domain ? String(sub_domain) : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
