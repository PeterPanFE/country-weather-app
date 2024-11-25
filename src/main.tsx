// src/main.tsx
import * as ReactDOMClient from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import './styles/global.css';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement as HTMLElement);
root.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
);
