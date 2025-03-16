import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// import { onError } from "@apollo/client/link/error";
// import { ApolloLink } from "@apollo/client";
const httpLink = createHttpLink({
  uri: "/api/graphql",
});



const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

export default client;
