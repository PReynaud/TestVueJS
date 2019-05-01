import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default class BasicService {
  httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:5000'
  });

  // Create the apollo client
  apolloClient = new ApolloClient({
    link: this.httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
  });
}
