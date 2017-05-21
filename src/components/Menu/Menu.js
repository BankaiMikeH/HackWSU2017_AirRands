import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';

class SideMenu extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
        </Menu>
    }
}


export default reduxBurgerMenu(Menu);