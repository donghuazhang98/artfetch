import React from "react"
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import Login from './containers/login'
import Main from './containers/main'
import Profile from './containers/profile'
import Post from './containers/post'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
            <Route path='/post' component={Post} />
            <Route component={Main} />
          </Switch>
        </HashRouter>
      </Provider>    
    );
  }
}

export default App;
