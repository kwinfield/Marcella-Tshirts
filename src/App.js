import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Router from './Router'

const Navigation = ({ cart }) =>
<nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <a className='navbar-brand ml-3' href='#' id='btn_1'>Marcella | Lee</a>
      <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
        <ul className='navbar-nav'>
          <li className='mr-3 nav-item'><NavLink to='/' className="nav-link">Home</NavLink></li>
          <li className='mr-3 nav-item'><NavLink to='/shop' className="nav-link">Shop</NavLink></li>
        </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown mr-3 nav-item">
              <NavLink to='/cart' className="nav-link" role="button" aria-expanded="false">Cart <span className="glyphicon glyphicon-shopping-cart"></span>({cart.reduce((acc, item) => {
                return acc + item.quantity
              }, 0)})<span className="caret"></span></NavLink>
            </li>
            <li className='mr-3 nav-item'><NavLink to='/checkout' className="nav-link">Checkout</NavLink></li>
          </ul>
      </div>
  </nav>

const Footer = (props) =>
<footer class="page-footer font-small blue pt-4 mt-5 bg-light">
  <div class="container-fluid text-center text-md-left container">
    <div class="row">
      <div class="col-md-6 mt-md-0 mt-3">
        <h5 class="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns here to organize your footer content.</p>
      </div>
      <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
      </div>
      <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3 bg-secondary">© 2018 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
    </div>
</footer>

class App extends Component {
  render() {
    return <div className='page-container'>
      <Navigation { ...this.props } />
      <Router />
      <Footer />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default withRouter(connect(mapStateToProps)(App));
