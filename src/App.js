import './App.scss';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={HomeScreen}></Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
