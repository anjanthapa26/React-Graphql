import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient,ApolloProvider, InMemoryCache} from "@apollo/client"
import {BrowserRouter } from 'react-router-dom'

// CREATE an apollo client to make a query to the server 
const client = new ApolloClient({
  uri:"https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* connect the react application to graphql server */}
    <ApolloProvider client = {client} >
    <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();