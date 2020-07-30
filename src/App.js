import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import './App.scss'
import { Main } from './components/Main/Main'

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/menu' render={() => <h1>Menu</h1>}/>
        <Route exact path='/delivery' render={() => <h1>Delivery</h1>}/>
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default withRouter(App)
