import React, { Component } from 'react'
import style from './Header.css'

class Header extends Component {
    render() {
        return (
            <div className={ style.header }>
                <h1>Super Squad</h1>
            </div>
        );
    }
}
  
export default Header;