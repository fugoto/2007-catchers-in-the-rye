import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import AllCategories from './category/AllCategories'
import SingleCategory from './category/SingleCategory'
import CreateCostume from './costume/CreateCostume'
import NavBar from './NavBar'
import Home from './Home'
import Login from './authentication/Login'
import SingleCostume from './costume/SingleCostume'
import Cart from './Cart'
import { checkCookiesSetSession } from '../redux/authentication/session'

class Routes extends Component {
  componentDidMount () {
    this.props.checkCookiesSetSession ()
  }
  render() {
    return (
      <Router>
        <div>
          <Route render={() => <NavBar />} />
          <div className="container">
            <main>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route path="/home" exact component={Home} />
                <Route path="/categories" exact component={AllCategories} />
                <Route path="/categories/:title" exact component={SingleCategory} />
                <Route path="/costumes/:name/:id" exact component={SingleCostume} />
                <Route path= "/costumes/add" exact component={CreateCostume} />
                <Route path= "/login" exact component={Login} />
                <Route path= "/cart" exact component={Cart} />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createGuestSession: () => {
      dispatch(createGuestSession())
    },
    refreshSession: (sessionId) => {
      dispatch(refreshSession(sessionId))
    },
    checkCookiesSetSession : () => {
      dispatch(checkCookiesSetSession ())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)