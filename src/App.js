import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => <h1>Main</h1>}/>
        <Route exact path='/menu' render={() => <h1>Menu</h1>}/>
        <Route exact path='/delivery' render={() => <h1>Delivery</h1>}/>
      </Switch>
    </div>
  );
}

export default withRouter(App)
