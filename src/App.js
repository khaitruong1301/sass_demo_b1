import {BrowserRouter, Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Route path={'/login'} component={Login} />
      <Route exact path={'/home'} component={Home} />
      <Route path={'/'} component={Home} />
    </BrowserRouter>
  );
}

export default App;
