import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import './App.scss'

import { Main } from './components/Main/Main'
import { Menu } from './components/Menu/Menu'

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Switch>
        <div className='App-content'>
          <Route exact path='/' component={Main}/>
          <Route exact path='/menu' component={Menu}/>
          <Route exact path='/delivery' render={() => <h1>Delivery</h1>}/>
        </div>
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default withRouter(App)
