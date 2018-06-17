import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../Payments";

import styles from "./Header.css";
// Header renders the Navbar with different links depending on
// whether or not user is logged in. Users can click Payments
// component to purchase credits
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3">Credits: {this.props.auth.credits}</li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav className={styles.Navbar}>
        <Link to={this.props.auth ? "/surveys" : "/"} className={styles.Logo}>
          Emaily
        </Link>
        <ul className={styles.NavItems}>{this.renderContent()}</ul>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
