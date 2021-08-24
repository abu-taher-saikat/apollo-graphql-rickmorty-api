import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AnimatedCursor from "react-animated-cursor";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import SingleCharacter from "./Screens/SingleCharacter";
import EpisodeScreen from "./Screens/EpisodeScreen";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // uri : "https://graphql-weather-api.herokuapp.com" ,
    uri: "https://rickandmortyapi.com/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <AnimatedCursor
        innerSize={12}
        outerSize={16}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route
            exact
            path="/character/:id"
            component={SingleCharacter}
          ></Route>
          <Route exact path="/episodes" component={EpisodeScreen}></Route>
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}
export default App;
