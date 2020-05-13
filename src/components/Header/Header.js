import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumber } from "../../actions/getAction";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";

function Header(props) {
  useEffect(() => {
    getNumber();
  }, []);

  return (
    <header>
      <nav>
        <h2>Raptor's Merchandise</h2>
        <ul>
          <li>
            <Link to='/'>
              <Button variant='dark'>Home</Button>
            </Link>
          </li>
          <li className='cart'>
            <Link to='/cart'>
              <Button variant='primary'>
                Cart: <span>{props.cartProps.cartNumber}</span>
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps, { getNumber })(Header);
