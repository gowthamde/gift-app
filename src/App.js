import './App.css';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import ForHer from './components/For-Her/ForHer';
import ForHim from './components/For-Him/ForHim';
import Home from './components/Home/Home';
import ViewGift from './components/Common/ViewGift/ViewGift';
import Login from './components/Common/Login/Login';
function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/for-her" component={ForHer} />
        <Route path="/for-him" component={ForHim} />
        <Route path="/highlight/view/:giftNo" component={ViewGift}/>
      </Switch>
    </div>
  );
}

export default App;
