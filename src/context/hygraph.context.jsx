// Import external modules
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

// HTTP link to the GraphQL resource
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_HYG_API,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_HYG_AUTH}`,
    },
  }));
  return forward(operation);
});

// Create an Apollo GraphQL client
const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

const HygraphProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { HygraphProvider };
