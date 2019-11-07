import React, { Component } from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';


const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 0.5em;
`;

const NavBarStyle = styled.nav``;

export default class NavBar extends Component {
  state = {
    hoverNavBar: false,
    searchInput: null,
  };

  hoverNavBar() {
    window.scrollY <= 0
      ? this.setState({ hoverNavBar: false })
      : this.setState({ hoverNavBar: true });
  }

  componentDidMount() {
    // Added True To End To Listen to All Events On Page
    window.addEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  componentWillUnmount() {
    // Added True To End To LIsten to All Events On Page
    window.removeEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  inputChange(e){
    const val = e.target.value;
    this.setState({searchInput: val});
  }

  render() {
    return (
      <NavBarStyle
        className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
        style={
          this.state.hoverNavBar
            ? {
                boxShadow:
                  '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                backgroundColor: '#ef5350 !important'
              }
            : { backgroundColor: 'transparent !important' }
        }
      >
       
          <Logo src="./logo.svg" />
          HL-Pokedex

          <form>
          <input type="text" value={this.state.searchInput} onChange={(e) => this.inputChange(e)}></input>
          <Link to={"/search/" + this.state.searchInput}>Search</Link>
          </form>
          
      </NavBarStyle>
    );
  }
}
