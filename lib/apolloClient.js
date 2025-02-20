import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/api/graphql",
});

// const authLink = setContext((_, { headers }) => {
//   // Retrieve the token from localStorage, sessionStorage, or cookies
//   const event_id = 73
//   const sub_domain = 'food'
//   return {
//     headers: {
//       ...headers,
//       event_id: event_id ? String(event_id) : "",
//       sub_domain: sub_domain ? String(sub_domain) : "",
//     },
//   };
// });

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
