import './App.scss';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import {ApolloClient , InMemoryCache , ApolloProvider, HttpLink} from '@apollo/client';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';

function App() {
  const client = new ApolloClient({
    cache : new InMemoryCache(),
    // uri : "https://graphql-weather-api.herokuapp.com" ,
    uri : "https://rickandmortyapi.com/graphql"
  })
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={HomeScreen}></Route>
          </Switch>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
